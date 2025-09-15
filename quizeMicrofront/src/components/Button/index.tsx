import React from "react";
import { useDispatch, useSelector } from "react-redux";

import quizeText from "../../constant/text";
import { doTestAgain, nextQuestion } from "../../store/quizeSlice";
import RootState from "../../types/RootState";

import "./styles.css";

function Button() {
  const { questions, currentQuestionInd, selectedId, isDone } = useSelector(
    (state: RootState) => state.quize,
  );
  const dispatch = useDispatch();
  const handleClickNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const handleDoTestAgain = () => {
    dispatch(doTestAgain());
    window.dispatchEvent(new CustomEvent("restart-quize"));
  };

  const isLastQuestion =
    questions && currentQuestionInd === questions.length - 1;

  const buttonText = isLastQuestion
    ? `${quizeText.button.completeTheTest}`
    : `${quizeText.button.nextQuestion}`;
  return (
    <>
      {isDone ? (
        <button
          onClick={handleDoTestAgain}
          className="button"
          data-cy="do-test-again"
        >
          {quizeText.button.takeAgain}
        </button>
      ) : (
        <button
          onClick={handleClickNextQuestion}
          disabled={selectedId ? false : true}
          className="button"
          data-cy="next-question"
        >
          {buttonText}
        </button>
      )}
    </>
  );
}

export default Button;
