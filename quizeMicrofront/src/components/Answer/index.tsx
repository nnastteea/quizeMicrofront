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
            ? { background: "#afd275" }
            : { background: "#b23850" }
          : { background: "#fbf8f8d0" }
      }
      className="answer"
    >
      <p>{answer}</p>
    </div>
  );
}

export default Answer;
