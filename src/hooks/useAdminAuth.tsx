
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const useAdminAuth = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('🔐 useAdminAuth check:', { user: user?.email, isAdmin, loading });
    
    if (!loading && (!user || !isAdmin)) {
      console.log('🔐 Redirecting to login from useAdminAuth');
      navigate('/admin/login');
    }
  }, [user, isAdmin, loading, navigate]);

  return { user, isAdmin, loading };
};
