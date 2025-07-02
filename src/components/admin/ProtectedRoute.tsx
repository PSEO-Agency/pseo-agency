
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isAdmin, loading } = useAuth();

  console.log('🔒 ProtectedRoute check:', { user: user?.email, isAdmin, loading });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="text-gray-600">Verifying admin access...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    console.log('🔒 No user, redirecting to login');
    return <Navigate to="/admin/login" replace />;
  }

  if (!isAdmin) {
    console.log('🔒 User exists but not admin, redirecting to login');
    return <Navigate to="/admin/login" replace />;
  }

  console.log('✅ Admin access granted');
  return <>{children}</>;
};
