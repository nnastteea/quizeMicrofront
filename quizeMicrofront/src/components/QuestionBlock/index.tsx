import React from "react";
import { useSelector } from "react-redux";
import QuestionProps from "types/QuestionProps";

import RootState from "../../types/RootState";
import Answer from "../Answer/index";
import Counter from "../Counter/index";

import "./styles.css";

function QuestionBlock({ question }: QuestionProps) {
  const { questions, currentQuestionInd, isDone } = useSelector(
    (state: RootState) => state.quize,
  );
  return (
    <div key={question.id} className="questionBlock">
      <div className="questionAndImage">
        {!isDone && (
          <Counter
            currentQuestionInd={currentQuestionInd}
            questions={questions}
          />
        )}
        <h3>{question.text}</h3>
        <img src={question.image} />
      </div>
      <div className="answersBlock">
        {question.answers.map(({ id, answer, isCorrect }) => (
          <Answer id={id} answer={answer} isCorrect={isCorrect} />
        ))}
      </div>
    </div>
  );
}

export default QuestionBlock;
