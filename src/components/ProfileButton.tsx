import React from 'react';

export function ProfileButton() {
  return (
    <button className="w-8 h-8 rounded-full overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </button>
  );
}