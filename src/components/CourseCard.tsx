import React from 'react';
import { MoreVertical, Users } from 'lucide-react';
import type { Course } from '../types';
import { Dropdown, DropdownItem } from './ui/Dropdown';
import { ConfirmationModal } from './ui/ConfirmationModal';

interface CourseCardProps {
  course: Course;
  onClick: (courseId: string) => void;
  onRemove: (courseId: string) => void;
}

export function CourseCard({ course, onClick, onRemove }: CourseCardProps) {
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => onClick(course.id)}
      >
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{course.name}</h3>
              <p className="text-sm text-gray-600">{course.teacher.name}</p>
            </div>
            <Dropdown
              trigger={
                <button 
                  className="p-1 hover:bg-gray-100 rounded-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
              }
            >
              <DropdownItem
                variant="danger"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowConfirmation(true);
                }}
              >
                Remove
              </DropdownItem>
            </Dropdown>
          </div>
          <div className="mt-4 flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">{course.students.length} students</span>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={() => {
          onRemove(course.id);
          setShowConfirmation(false);
        }}
        title="Remove Class"
        message="Are you sure you want to remove this class? This action cannot be undone."
      />
    </>
  );
}