export interface Course {
  id: string;
  name: string;
  teacher: User;
  students: User[];
}

export interface User {
  id: string;
  name: string;
  role: 'teacher' | 'student';
}