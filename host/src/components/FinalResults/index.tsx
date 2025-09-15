import React from "react";

import hostAppText from "../../constant/text";
import FinalResultsProps from "../../types/FinalResultsProps";
import Loader from "../Loader/index";

import "./styles.css";

function FinalResults({
  isQuizeDone,
  allResults,
  completedUserCount,
  allPeople,
}: FinalResultsProps) {
  return (
    <>
      {isQuizeDone &&
        allResults.length > 0 &&
        (completedUserCount > 0 && completedUserCount === allPeople.length ? (
          <div className="roomResults">
            <h4>{hostAppText.quizeScreen.finalResults}</h4>
            <ul className="listResults">
              {allResults
                .sort(
                  (a, b) => Number(b.correctAnswers) - Number(a.correctAnswers),
                )
                .map((res, index) => (
                  <li key={index}>
                    {res.userName}: {res.correctAnswers}{" "}
                    {hostAppText.quizeScreen.correctAnswers}
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          <>
            <p>{hostAppText.finalResults.waitingText}</p>
            <Loader />
          </>
        ))}
    </>
  );
}

export default FinalResults;
