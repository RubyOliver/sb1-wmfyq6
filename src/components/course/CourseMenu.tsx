import React from 'react';
import { MoreVertical } from 'lucide-react';
import { Dropdown, DropdownItem } from '../ui/Dropdown';

interface CourseMenuProps {
  onEdit: () => void;
  onRemove: () => void;
}

export function CourseMenu({ onEdit, onRemove }: CourseMenuProps) {
  return (
    <Dropdown
      trigger={
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <MoreVertical className="w-5 h-5 text-gray-500" />
        </button>
      }
    >
      <DropdownItem onClick={onEdit}>
        Edit
      </DropdownItem>
      <DropdownItem
        variant="danger"
        onClick={onRemove}
      >
        Remove
      </DropdownItem>
    </Dropdown>
  );
}