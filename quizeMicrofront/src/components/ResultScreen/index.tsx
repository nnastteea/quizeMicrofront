import React from "react";

import quizeText from "../../constant/text";
import ResultScreenProps from "../../types/ResultScreenProps";

import "./styles.css";

function ResultScreen({ correctAnswers, questions }: ResultScreenProps) {
  return (
    <div className="resultContainer">
      <h3>{quizeText.result.testCompleted}</h3>
      <p>{quizeText.result.result}</p>
      <p className="resultText">
        {correctAnswers}/{questions.length}
      </p>
    </div>
  );
}

export default ResultScreen;
