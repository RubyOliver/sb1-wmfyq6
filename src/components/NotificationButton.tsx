import React from 'react';
import { Bell } from 'lucide-react';

export function NotificationButton() {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <Bell className="w-6 h-6 text-gray-600" />
    </button>
  );
}