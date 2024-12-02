import React from 'react';
import { Menu, Plus, Bell } from 'lucide-react';
import { Button } from './ui/Button';
import { NotificationButton } from './NotificationButton';
import { ProfileButton } from './ProfileButton';

interface HeaderProps {
  onCreateClass: () => void;
}

export function Header({ onCreateClass }: HeaderProps) {
  return (
    <header className="h-16 border-b border-gray-200 bg-white">
      <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-2xl font-medium text-gray-900">Classroom</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="primary" 
            size="sm" 
            onClick={onCreateClass}
            className="flex items-center"
          >
            <Plus className="w-4 h-4 mr-1.5" />
            Create Class
          </Button>
          
          <NotificationButton />
          <ProfileButton />
        </div>
      </div>
    </header>
  );
}