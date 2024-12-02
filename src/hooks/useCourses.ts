import { useState } from 'react';
import type { Course } from '../types';
import { mockCourses } from '../data/mockData';

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>(mockCourses);

  const addCourse = (course: Omit<Course, 'id'>) => {
    const newCourse: Course = {
      ...course,
      id: String(Date.now()),
    };
    setCourses(prev => [...prev, newCourse]);
  };

  const removeCourse = (courseId: string) => {
    setCourses(prev => prev.filter(course => course.id !== courseId));
  };

  const updateCourse = (courseId: string, updatedCourse: Omit<Course, 'id'>) => {
    setCourses(prev => prev.map(course => 
      course.id === courseId 
        ? { ...updatedCourse, id: courseId }
        : course
    ));
  };

  return {
    courses,
    addCourse,
    removeCourse,
    updateCourse,
  };
}