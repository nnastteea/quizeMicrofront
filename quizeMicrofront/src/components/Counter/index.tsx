import React from "react";

import CounterProps from "../../types/CounterProps";

import "./styles.css";

function Counter({ currentQuestionInd, questions }: CounterProps) {
  return (
    <p className="counter">
      {currentQuestionInd + 1}/{questions.length}
    </p>
  );
}

export default Counter;
