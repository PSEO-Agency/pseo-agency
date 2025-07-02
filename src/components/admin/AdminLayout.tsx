
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';

interface AdminLayoutProps {
  title: string;
  icon?: React.ReactNode;
  onAdd?: () => void;
  addButtonText?: string;
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  title,
  icon,
  onAdd,
  addButtonText = "Add Item",
  children
}) => {
  const { user, isAdmin, loading } = useAdminAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => navigate('/admin')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center space-x-2">
              {icon}
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            </div>
          </div>
          {onAdd && (
            <Button onClick={onAdd}>
              {addButtonText}
            </Button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
