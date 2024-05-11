import type { Address } from "viem";

export enum ClassLevel {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
  OPEN = "Open",
}

export enum BadgeType {
  CLASS = "Class",
  COURSE = "Course",
  WORKSHOP = "Workshop",
  SPECIAL = "Special",
}

export type Badge = {
  type: BadgeType;
  collectedAmount: number;
};

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

export interface Proposal {
  proposer: Address;
  voteEnd: string;
  voteStart: string;
  id: string;
  for: number;
  against: number;
  abstain: number;
  createdAt: string;
  description: string;
  targets: Address[];
  values: string[];
  calldatas: string[];
}

export interface GraphQLResponse<T> {
  data: T;
}

export interface Lesson {
  id: string;
  fee: number;
  instructor: {
    id: string;
    active: boolean;
    name: string;
  };
  maxParticipants: number;
  startsAt: string;
  style: string;
  endsAt: string;
  participants: {
    id: string;
  }[];
}
