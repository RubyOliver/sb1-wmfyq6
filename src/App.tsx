import React, { useState } from 'react';
import { Header } from './components/Header';
import { CourseCard } from './components/course/CourseCard';
import { Modal } from './components/ui/Modal';
import { CreateClassForm } from './components/CreateClassForm';
import { useCourses } from './hooks/useCourses';

export function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { courses, addCourse, removeCourse, updateCourse } = useCourses();

  const handleCourseClick = (courseId: string) => {
    console.log('Navigating to course:', courseId);
  };

  const handleCreateClass = (courseData: any) => {
    addCourse(courseData);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCreateClass={() => setIsCreateModalOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={handleCourseClick}
              onRemove={removeCourse}
              onEdit={updateCourse}
            />
          ))}
        </div>
      </main>

      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create Class"
      >
        <CreateClassForm
          onSubmit={handleCreateClass}
          onCancel={() => setIsCreateModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default App;