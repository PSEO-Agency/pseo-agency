
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from '@/contexts/AuthContext';
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { Lock, Mail, AlertCircle, CheckCircle } from 'lucide-react';

export const AdminLogin = () => {
  const [email, setEmail] = useState('bas@programmaticseo.agency'); // Pre-fill for testing
  const [password, setPassword] = useState('Huub5390!032010'); // Pre-fill for testing
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);
  const { signIn, user, isAdmin, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // Add debug info helper
  const addDebugInfo = (info: string) => {
    console.log('🔍 Debug:', info);
    setDebugInfo(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${info}`]);
  };

  // Monitor auth state changes
  useEffect(() => {
    if (user) {
      addDebugInfo(`User authenticated: ${user.email}`);
      if (isAdmin) {
        addDebugInfo('Admin status confirmed - redirecting to dashboard');
        setTimeout(() => navigate('/admin'), 100);
      } else {
        addDebugInfo('User authenticated but not admin');
      }
    } else {
      addDebugInfo('No authenticated user');
    }
  }, [user, isAdmin, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    addDebugInfo('Starting login attempt');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      addDebugInfo('Calling signIn...');
      const { error } = await signIn(email, password);
      
      if (error) {
        addDebugInfo(`Sign in error: ${error.message}`);
        setError(error.message || 'Failed to sign in');
      } else {
        addDebugInfo('Sign in successful, waiting for auth state update...');
      }
    } catch (err: any) {
      addDebugInfo(`Exception during sign in: ${err.message}`);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Show loading state during auth check
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="text-gray-600">Checking authentication...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex items-center justify-center p-4 min-h-screen">
        <div className="w-full max-w-2xl space-y-4">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
              <CardDescription>
                Sign in to access the content management system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {user && !isAdmin && (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      You are signed in as {user.email} but don't have admin privileges.
                    </AlertDescription>
                  </Alert>
                )}

                {user && isAdmin && (
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Successfully authenticated as admin. Redirecting...
                    </AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full" disabled={loading || authLoading}>
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Debug information card */}
          {debugInfo.length > 0 && (
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-sm">Debug Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-xs font-mono">
                  {debugInfo.map((info, index) => (
                    <div key={index} className="text-gray-600">{info}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <TrustedToolsSection />
    </div>
  );
};
