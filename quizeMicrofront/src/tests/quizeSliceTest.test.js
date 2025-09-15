import { questions } from "../data/questions";
import {
  doTestAgain,
  nextQuestion,
  quizeSlice,
  selectAnswer,
} from "../store/quizeSlice";

const initialState = {
  questions,
  currentQuestionInd: 0,
  selectedId: "",
  correctAnswers: 0,
  isDone: false,
};

describe("quizeSlice reducers", () => {
  it("should return the initial state", () => {
    expect(quizeSlice.reducer(undefined, { type: "unknown" })).toEqual(
      initialState,
    );
  });
  it("should handle selectAnswer", () => {
    const newState = quizeSlice.reducer(initialState, selectAnswer("12"));
    expect(newState.selectedId).toBe("12");
  });
  it("shouldn`t handle selectAnswer second time", () => {
    const newState = quizeSlice.reducer(initialState, selectAnswer("12"));
    const newSecondState = quizeSlice.reducer(newState, selectAnswer("13"));
    expect(newSecondState.selectedId).toBe("12");
  });
  it("should handle nextQuestion and do the correct selection", () => {
    const currentAnswer = { ...initialState, selectedId: "12" };
    const newState = quizeSlice.reducer(currentAnswer, nextQuestion());
    expect(newState.correctAnswers).toBe(1);
    expect(newState.currentQuestionInd).toBe(1);
    expect(newState.selectedId).toBe("");
    expect(newState.isDone).toBeFalsy();
  });
  it("should handle nextQuestion and do the uncorrect selection", () => {
    const currentAnswer = { ...initialState, selectedId: "13" };
    const newState = quizeSlice.reducer(currentAnswer, nextQuestion());
    expect(newState.correctAnswers).toBe(0);
    expect(newState.currentQuestionInd).toBe(1);
    expect(newState.selectedId).toBe("");
    expect(newState.isDone).toBeFalsy();
  });
  it("should handle nextQuestion and finish the test", () => {
    const lastAnswerState = {
      ...initialState,
      currentQuestionInd: questions.length - 1,
      selectedId: "101",
    };
    const newState = quizeSlice.reducer(lastAnswerState, nextQuestion());
    expect(newState.isDone).not.toBeFalsy();
  });
  it("should handle doTestAgain", () => {
    const lastAnswerStateToFinish = {
      questions,
      currentQuestionInd: questions.length - 1,
      selectedId: "101",
      correctAnswers: 5,
      isDone: true,
    };
    const newState = quizeSlice.reducer(lastAnswerStateToFinish, doTestAgain());
    expect(newState).toEqual(initialState);
  });
  it("shouldn`t handle doTestAgain", () => {
    const isNotDoneState = {
      ...initialState,
      isDone: false,
    };
    const newState = quizeSlice.reducer(isNotDoneState, doTestAgain());
    expect(newState).toEqual(isNotDoneState);
  });
});
