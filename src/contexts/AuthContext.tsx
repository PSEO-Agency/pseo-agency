
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Cleanup function to clear any corrupted auth state
const cleanupAuthState = () => {
  try {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        localStorage.removeItem(key);
      }
    });
    Object.keys(sessionStorage || {}).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        sessionStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error('Error cleaning up auth state:', error);
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAdminStatus = async (userId: string): Promise<boolean> => {
    try {
      console.log('🔍 Checking admin status for user:', userId);
      
      // Use the database function instead of direct table query
      const { data, error } = await supabase.rpc('is_admin', { user_id: userId });
      
      console.log('🔍 Admin check result:', { data, error });
      
      if (error) {
        console.error('❌ Error checking admin status:', error);
        return false;
      }
      
      const adminStatus = !!data;
      console.log('✅ Admin status determined:', adminStatus);
      return adminStatus;
    } catch (error) {
      console.error('❌ Exception in checkAdminStatus:', error);
      return false;
    }
  };

  useEffect(() => {
    console.log('🚀 AuthProvider: Setting up auth state listener');
    
    let isMounted = true;

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔄 Auth state change:', event, session?.user?.email);
        
        if (!isMounted) return;
        
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          console.log('👤 User authenticated, checking admin status...');
          // Use setTimeout to avoid potential deadlocks
          setTimeout(async () => {
            if (isMounted) {
              const adminStatus = await checkAdminStatus(session.user.id);
              if (isMounted) {
                console.log('🔐 Setting admin status:', adminStatus);
                setIsAdmin(adminStatus);
                setLoading(false);
              }
            }
          }, 100);
        } else {
          console.log('👤 No user, clearing admin status');
          if (isMounted) {
            setIsAdmin(false);
            setLoading(false);
          }
        }
      }
    );

    // Check for existing session
    const checkExistingSession = async () => {
      try {
        console.log('🔄 Checking for existing session...');
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('❌ Error getting session:', error);
          if (isMounted) {
            setLoading(false);
          }
          return;
        }
        
        console.log('📋 Initial session check:', session?.user?.email || 'No session');
        
        if (!isMounted) return;
        
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          console.log('👤 Existing user found, checking admin status...');
          const adminStatus = await checkAdminStatus(session.user.id);
          if (isMounted) {
            console.log('🔐 Initial admin status:', adminStatus);
            setIsAdmin(adminStatus);
          }
        }
        
        if (isMounted) {
          setLoading(false);
        }
      } catch (error) {
        console.error('❌ Error in checkExistingSession:', error);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    checkExistingSession();

    return () => {
      console.log('🧹 AuthProvider cleanup');
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    console.log('🔑 Attempting sign in for:', email);
    setLoading(true);
    
    // Clean up any existing auth state first
    cleanupAuthState();
    
    try {
      // Attempt to sign out first to clear any existing session
      await supabase.auth.signOut({ scope: 'global' });
    } catch (error) {
      console.log('🧹 Sign out before sign in failed (this is OK):', error);
    }
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      console.error('❌ Sign in error:', error);
      setLoading(false);
    } else {
      console.log('✅ Sign in successful');
      // Loading will be set to false by the auth state change handler
    }
    
    return { error };
  };

  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl
      }
    });
    return { error };
  };

  const signOut = async () => {
    console.log('🚪 Signing out');
    setLoading(true);
    cleanupAuthState();
    await supabase.auth.signOut({ scope: 'global' });
  };

  console.log('🔍 Current auth state:', { 
    user: user?.email || 'None', 
    isAdmin, 
    loading 
  });

  return (
    <AuthContext.Provider value={{
      user,
      session,
      isAdmin,
      loading,
      signIn,
      signUp,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
