
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Copy, Eye, EyeOff, Plus } from 'lucide-react';

interface TableColumn {
  key: string;
  label: string;
  render?: (value: any, item: any) => React.ReactNode;
}

interface TableAction {
  icon: React.ReactNode | ((item: any) => React.ReactNode);
  label: string;
  onClick: (item: any) => void;
  variant?: "default" | "destructive" | "outline" | "secondary";
}

interface AdminTableProps {
  data: any[];
  columns: TableColumn[];
  actions?: TableAction[];
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
  onDuplicate?: (item: any) => void;
  onToggleStatus?: (item: any) => void;
  statusField?: string;
  emptyStateIcon?: React.ReactNode;
  emptyStateText?: string;
  onAdd?: () => void;
  addButtonText?: string;
}

export const AdminTable: React.FC<AdminTableProps> = ({
  data,
  columns,
  actions = [],
  onEdit,
  onDelete,
  onDuplicate,
  onToggleStatus,
  statusField,
  emptyStateIcon,
  emptyStateText = "No items found",
  onAdd,
  addButtonText = "Create Your First Item"
}) => {
  const defaultActions: TableAction[] = [];

  if (onToggleStatus && statusField) {
    defaultActions.push({
      icon: (item: any) => item[statusField] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />,
      label: "Toggle Status",
      onClick: onToggleStatus,
      variant: "outline"
    });
  }

  if (onDuplicate) {
    defaultActions.push({
      icon: <Copy className="h-4 w-4" />,
      label: "Duplicate",
      onClick: onDuplicate,
      variant: "outline"
    });
  }

  if (onEdit) {
    defaultActions.push({
      icon: <Edit className="h-4 w-4" />,
      label: "Edit",
      onClick: onEdit,
      variant: "outline"
    });
  }

  if (onDelete) {
    defaultActions.push({
      icon: <Trash2 className="h-4 w-4" />,
      label: "Delete",
      onClick: onDelete,
      variant: "outline"
    });
  }

  const allActions = [...defaultActions, ...actions];

  if (data.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          {emptyStateIcon && <div className="mb-4">{emptyStateIcon}</div>}
          <p className="text-gray-500 mb-4">{emptyStateText}</p>
          {onAdd && (
            <Button onClick={onAdd}>
              <Plus className="h-4 w-4 mr-2" />
              {addButtonText}
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-6">
      {data.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl">
                  {item.title || item.name || item.question || 'Untitled'}
                </CardTitle>
                <div className="flex items-center space-x-4 mt-2">
                  {columns.map((column) => (
                    <div key={column.key}>
                      {column.render ? column.render(item[column.key], item) : (
                        <span className="text-sm text-gray-500">
                          {item[column.key]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {allActions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant || "outline"}
                    size="sm"
                    onClick={() => action.onClick(item)}
                    title={action.label}
                  >
                    {typeof action.icon === 'function' ? action.icon(item) : action.icon}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
          {(item.description || item.excerpt || item.bio || item.answer) && (
            <CardContent>
              <p className="text-gray-600">
                {item.description || item.excerpt || item.bio || item.answer}
              </p>
              {(item.created_at || item.updated_at) && (
                <div className="mt-4 text-sm text-gray-500">
                  Created: {new Date(item.created_at).toLocaleDateString()}
                  {item.updated_at !== item.created_at && (
                    <span> • Updated: {new Date(item.updated_at).toLocaleDateString()}</span>
                  )}
                </div>
              )}
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};
