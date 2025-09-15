import React, { useState } from "react";

import Close from "../../assets/close.svg";
import People from "../../assets/people.svg";
import hostAppText from "../../constant/text";
import { PlayersListProps } from "../../types/PlayersListProps";

import "../PlayersList/style.css";

function PlayersList({ allPeople, allResults, currentUser }: PlayersListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenListOfPlayers = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="dropdownWrapper">
      <button className="buttonOpenList" onClick={handleOpenListOfPlayers}>
        <span>{!isOpen ? <People /> : <Close />}</span>
        {hostAppText.quizeScreen.allPlayers}
      </button>
      {isOpen && (
        <div className="listPlayersContainer">
          {allPeople
            .sort((a, b) => {
              const scoreA =
                allResults.find((res) => res.userName === a.userName)
                  ?.correctAnswers || 0;
              const scoreB =
                allResults.find((res) => res.userName === b.userName)
                  ?.correctAnswers || 0;
              return scoreB - scoreA;
            })
            .map((user, ind) => {
              const score = allResults.find(
                (res) => res.userName === user.userName,
              );
              const isCurrent = user.userName === currentUser;
              return (
                <p
                  key={ind}
                  className={isCurrent ? "player current" : "player"}
                >
                  {isCurrent && <span>me: </span>}
                  {user.userName} - {score ? score.correctAnswers : 0}
                </p>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default PlayersList;
