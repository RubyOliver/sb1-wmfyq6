import React, { useState } from 'react';
import { Button } from './ui/Button';
import type { Course } from '../types';
import { currentUser } from '../data/mockData';

interface CreateClassFormProps {
  onSubmit: (course: Omit<Course, 'id'>) => void;
  onCancel: () => void;
  initialData?: Course;
}

export function CreateClassForm({ onSubmit, onCancel, initialData }: CreateClassFormProps) {
  const [name, setName] = useState(initialData?.name || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      teacher: currentUser,
      students: initialData?.students || []
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Class Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="e.g., Mathematics 101"
        />
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {initialData ? 'Save Changes' : 'Create'}
        </Button>
      </div>
    </form>
  );
}