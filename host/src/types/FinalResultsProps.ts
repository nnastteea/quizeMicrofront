import Result from "./Result";
import User from "./User";

export default interface FinalResultsProps {
  isQuizeDone: boolean;
  allResults: Result[];
  completedUserCount: number;
  allPeople: User[];
}
