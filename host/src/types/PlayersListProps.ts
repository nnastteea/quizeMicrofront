import Results from "./Results";
import Users from "./Users";

export interface PlayersListProps {
  allPeople: Users;
  allResults: Results;
  currentUser: string;
}
