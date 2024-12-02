import type { Course, User } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'John Doe',
  role: 'teacher'
};

export const mockCourses: Course[] = [
  {
    id: '1',
    name: 'Mathematics 101',
    teacher: currentUser,
    students: []
  },
  {
    id: '2',
    name: 'Introduction to Physics',
    teacher: currentUser,
    students: []
  },
  {
    id: '3',
    name: 'World History',
    teacher: currentUser,
    students: []
  }
];