import { Question } from "../../common/interfaces/Question";

export interface IQuestion {
  question: Question;
  count: number;
  total: number;
  reviewMode: boolean;
}
