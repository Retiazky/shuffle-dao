export enum ClassLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  OPEN = 'Open',
}

export type ClassInfo = {
  date: string;
  time: string;
  level: ClassLevel;
  partOfCourse: boolean;
};
export interface Instructor {
  address: string;
  name: string;
}
