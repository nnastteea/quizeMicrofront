import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../src/components/Button";
import { resetState } from "../src/store/quizeSlice";
import RootState from "../src/types/RootState";
import QuestionBlock from "./components/QuestionBlock/index";
import ResultScreen from "./components/ResultScreen";

import "./styles.css";

function App() {
  const { questions, currentQuestionInd, correctAnswers, isDone } = useSelector(
    (state: RootState) => state.quize,
  );
  const currentQuestion = questions[currentQuestionInd];
  const dispatch = useDispatch();
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
    <div className="container">
      {currentQuestion && !isDone ? (
        <QuestionBlock key={currentQuestion.id} question={currentQuestion} />
      ) : (
        <ResultScreen correctAnswers={correctAnswers} questions={questions} />
      )}
      <Button />
    </div>
  );
}

export default App;
