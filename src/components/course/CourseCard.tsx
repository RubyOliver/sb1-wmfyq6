import React, { useState } from 'react';
import { Users } from 'lucide-react';
import type { Course } from '../../types';
import { CourseMenu } from './CourseMenu';
import { ConfirmationModal } from '../ui/ConfirmationModal';
import { Modal } from '../ui/Modal';
import { CreateClassForm } from '../CreateClassForm';

interface CourseCardProps {
  course: Course;
  onClick: (courseId: string) => void;
  onRemove: (courseId: string) => void;
  onEdit: (courseId: string, updatedCourse: Omit<Course, 'id'>) => void;
}

export function CourseCard({ course, onClick, onRemove, onEdit }: CourseCardProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest('button')) {
      onClick(course.id);
    }
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{course.name}</h3>
              <p className="text-sm text-gray-600">{course.teacher.name}</p>
            </div>
            <CourseMenu 
              onEdit={() => setShowEditModal(true)}
              onRemove={() => setShowConfirmation(true)} 
            />
          </div>
          <div className="mt-4 flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">{course.students.length} students</span>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit Class"
      >
        <CreateClassForm
          initialData={course}
          onSubmit={(updatedCourse) => {
            onEdit(course.id, updatedCourse);
            setShowEditModal(false);
          }}
          onCancel={() => setShowEditModal(false)}
        />
      </Modal>

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