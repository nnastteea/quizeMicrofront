export interface User {
  id: string;
  userName: string;
}

export interface Result {
  userName: string;
  correctAnswers: number;
  isCompleted: boolean;
}

export interface Room {
  users: User[];
  results: Result[];
  completedUserCount: number;
}

export type Rooms = {
  [roomId: string]: Room;
};
