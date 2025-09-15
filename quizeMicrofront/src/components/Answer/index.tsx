import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAnswer } from "../../store/quizeSlice";
import AnswerType from "../../types/AnswerType";
import RootState from "../../types/RootState";

import "./styles.css";

function Answer({ id, answer, isCorrect }: AnswerType) {
  const { selectedId } = useSelector((state: RootState) => state.quize);
  const dispatch = useDispatch();
  const handleSelectAnswer = (id: string) => {
    dispatch(selectAnswer(id));
  };
  return (
    <div
      key={id}
      onClick={() => handleSelectAnswer(id)}
      style={
        selectedId === id
          ? isCorrect
            ? { background: "rgba(175,210,117, 0.5)" }
            : { background: "rgba(178,56,80, 0.5)" }
          : { background: "rgba(255, 255, 255, 0.2)" }
      }
      className="answer"
      data-cy="answer"
    >
      <p>{answer}</p>
    </div>
  );
}

export default Answer;
