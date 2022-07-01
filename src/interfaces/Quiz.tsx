import { Question } from "./Question";

export interface Quiz {
  name: string;
  shuffleQuestions: boolean;
  questions: Question[];
}
