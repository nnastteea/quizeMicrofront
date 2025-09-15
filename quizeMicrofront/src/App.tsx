import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../src/components/Button";
import { resetState } from "../src/store/quizeSlice";
import RootState from "../src/types/RootState";
import QuestionBlock from "./components/QuestionBlock/index";
import ResultScreen from "./components/ResultScreen";

import "./styles.css";

interface Prop {
  onQuizeDone: (arg: number) => void;
  onAnswer: (arg: number) => void;
}

function App({ onQuizeDone, onAnswer }: Prop) {
  const { questions, currentQuestionInd, correctAnswers, isDone } = useSelector(
    (state: RootState) => state.quize,
  );
  const currentQuestion = questions[currentQuestionInd];
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDone) {
      onAnswer(correctAnswers);
    }
  }, [correctAnswers]);

  useEffect(() => {
    if (isDone) {
      onQuizeDone(correctAnswers);
    }
  }, [isDone, onQuizeDone]);

  useEffect(() => {
    const handler = () => {
      dispatch(resetState());
    };

    window.addEventListener("reset-quize", handler);
    return () => {
      window.removeEventListener("reset-quize", handler);
    };
  }, [dispatch]);

  return (
    <>
      {currentQuestion && !isDone ? (
        <div className="container">
          <QuestionBlock key={currentQuestion.id} question={currentQuestion} />
        </div>
      ) : (
        <div className="containerResult">
          <ResultScreen correctAnswers={correctAnswers} questions={questions} />
        </div>
      )}
      <Button />
    </>
  );
}

export default App;
