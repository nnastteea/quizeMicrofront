import QuestionAndAnswers from "../types/QuestionAndAnswers";

export default interface QuizeState {
  questions: QuestionAndAnswers[];
  currentQuestionInd: number;
  selectedId: string;
  correctAnswers: number;
  isDone: boolean;
}
