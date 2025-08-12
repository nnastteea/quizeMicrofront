import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { questions } from "../data/questions";
import AnswerType from "../types/AnswerType";
import QuizeState from "../types/QuizeState";

const initialState: QuizeState = {
  questions,
  currentQuestionInd: 0,
  selectedId: "",
  correctAnswers: 0,
  isDone: false,
};

export const quizeSlice = createSlice({
  name: "quize",
  initialState,
  reducers: {
    selectAnswer: (state, action: PayloadAction<string>) => {
      if (state.selectedId) return;
      state.selectedId = action.payload;
    },
    nextQuestion: (state) => {
      const currentQuestion = state.questions[state.currentQuestionInd];
      const selectedAnswerObj = currentQuestion.answers.find(
        (answ: AnswerType) => answ.id === state.selectedId,
      );
      if (selectedAnswerObj && selectedAnswerObj.isCorrect) {
        state.correctAnswers++;
      }
      if (state.currentQuestionInd < state.questions.length - 1) {
        state.currentQuestionInd++;
        state.isDone = false;
        state.selectedId = "";
      } else {
        state.isDone = true;
      }
    },
    doTestAgain: (state) => {
      if (state.isDone) {
        Object.assign(state, initialState);
      }
    },
  },
});

export const { selectAnswer, nextQuestion, doTestAgain } = quizeSlice.actions;
export default quizeSlice.reducer;
