import { Quiz } from "./interfaces/Quiz";
import { v4 as uuid } from "uuid";

export const History: Quiz = {
  name: "Historia Polski",
  shuffleQuestions: true,
  questions: [
    {
      content: "W którym roku odbył się chrzest Polski?",
      answers: [
        {
          content: "W 1996 roku",
          isCorrect: false,
          id: uuid(),
        },
        {
          content: "W 996 roku",
          isCorrect: false,
          id: uuid(),
        },
        {
          content: "W 966 roku",
          isCorrect: true,
          id: uuid(),
        },
      ],
      shuffleAnswers: false,
      id: uuid(),
    },
    {
      content: "Kto był pierwszym królem Polski?",
      answers: [
        {
          content: "Mieszko I",
          isCorrect: false,
          id: uuid(),
        },
        {
          content: "Bolesław Chrobry",
          isCorrect: true,
          id: uuid(),
        },
        {
          content: "Kazimierz Wielki",
          isCorrect: false,
          id: uuid(),
        },
        {
          content: "Lech Wałęsa",
          isCorrect: false,
          id: uuid(),
        },
      ],
      shuffleAnswers: true,
      id: uuid(),
    },
    {
      content: "Kto napisał Pana Tadeusza?",
      answers: [
        {
          content: "Juliusz Słowacki",
          isCorrect: false,
          id: uuid(),
        },
        {
          content: "Adam Mickiewicz",
          isCorrect: true,
          id: uuid(),
        },
      ],
      shuffleAnswers: false,
      id: uuid(),
    },
  ],
  id: uuid(),
};
