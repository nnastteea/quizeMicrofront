import AnswerType from "./AnswerType";

export default interface QuestionAndAnswers {
  id: number;
  text: string;
  image: string;
  answers: AnswerType[];
}
