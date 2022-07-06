import { Quiz } from "../interfaces/Quiz";
import { v4 as uuid } from "uuid";

export const quizzes: Quiz[] = [
  {
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
  },
  {
    name: "Geografia Polski",
    shuffleQuestions: false,
    questions: [
      {
        content: "Najwyższy polski szczyt to...",
        answers: [
          {
            content: "Śniardwy",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Turbacz",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Rysy",
            isCorrect: true,
            id: uuid(),
          },
        ],
        shuffleAnswers: true,
        id: uuid(),
      },
      {
        content: "Które miasto jest stolicą województwa Lubuskiego?",
        answers: [
          {
            content: "Gorzów Wielkopolski",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Zielona Góra",
            isCorrect: true,
            id: uuid(),
          },
          {
            content: "Lublin",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Toruń",
            isCorrect: false,
            id: uuid(),
          },
        ],
        shuffleAnswers: true,
        id: uuid(),
      },
      {
        content: "Która rzeka jest najdłuższa w Polsce?",
        answers: [
          {
            content: "Wisła",
            isCorrect: true,
            id: uuid(),
          },
          {
            content: "Warta",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "San",
            isCorrect: false,
            id: uuid(),
          },
        ],
        shuffleAnswers: false,
        id: uuid(),
      },
    ],
    id: uuid(),
  },
];
