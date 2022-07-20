import { Answer } from "./Answer";

export interface Question {
  id: string;
  content: string;
  shuffleAnswers: boolean;
  answers: Answer[];
}
