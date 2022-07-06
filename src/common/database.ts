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
    name: "Geografia",
    shuffleQuestions: true,
    questions: [
      {
        content: "Drugim najwyższym szczytem Polski jest:",
        answers: [
          {
            content: "Hińczowa Turnia",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Niżnie Rysy",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Świnica",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Mięguszowiecki Szczyt",
            isCorrect: true,
            id: uuid(),
          },
        ],
        shuffleAnswers: true,
        id: uuid(),
      },
      {
        content: "Największą pustynią na świecie jest:",
        answers: [
          {
            content: "Sahara",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Gobi",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Atakama",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Antarktyda",
            isCorrect: true,
            id: uuid(),
          },
        ],
        shuffleAnswers: true,
        id: uuid(),
      },
      {
        content: "Stolicą którego europejskiego kraju jest Kiszyniów?",
        answers: [
          {
            content: "Rumunii",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Węgier",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Mołdawii",
            isCorrect: true,
            id: uuid(),
          },
          {
            content: "Gruzji",
            isCorrect: false,
            id: uuid(),
          },
        ],
        shuffleAnswers: true,
        id: uuid(),
      },
      {
        content:
          "Leży w południowo-zachodniej części obecnej Jordanii. Położona jest w skalnej dolinie, do której prowadzi jedna wąska droga wśród skał. Słynie z licznych budowli wykutych w skałach. Była miastem Nabatejczyków. Co to takiego?",
        answers: [
          {
            content: "Petra",
            isCorrect: true,
            id: uuid(),
          },
          {
            content: "Dylomos",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Kordania",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Nabatejczen",
            isCorrect: false,
            id: uuid(),
          },
        ],
        shuffleAnswers: true,
        id: uuid(),
      },
      {
        content: "Jakie miasto jest stolicą Meksyku?",
        answers: [
          {
            content: "Tulum",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Mexico City",
            isCorrect: true,
            id: uuid(),
          },
          {
            content: "Tex Mex",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Guadalajara",
            isCorrect: false,
            id: uuid(),
          },
        ],
        shuffleAnswers: true,
        id: uuid(),
      },
      {
        content: "Jak nazywa się najdłuższy łańcuch górski na świecie, który rozciąga się na przestrzeni ponad 9000 km?",
        answers: [
          {
            content: "Alpy",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Atlas",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Pireneje",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Andy",
            isCorrect: true,
            id: uuid(),
          },
        ],
        shuffleAnswers: true,
        id: uuid(),
      },
      {
        content: "Enklawą jest:",
        answers: [
          {
            content: "San Marino",
            isCorrect: true,
            id: uuid(),
          },
          {
            content: "Alaska",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Australia",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "RPA",
            isCorrect: false,
            id: uuid(),
          },
        ],
        shuffleAnswers: true,
        id: uuid(),
      },
      {
        content: "Z ilu stanów składają się Stany Zjednoczone?",
        answers: [
          {
            content: "40",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "50",
            isCorrect: true,
            id: uuid(),
          },
          {
            content: "55",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "60",
            isCorrect: false,
            id: uuid(),
          },
        ],
        shuffleAnswers: true,
        id: uuid(),
      },
      {
        content: "Konstantynopol i Bizancjum to wcześniejsze nazwy jakiego miasta?",
        answers: [
          {
            content: "Stambuł",
            isCorrect: true,
            id: uuid(),
          },
          {
            content: "Kapadocja",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Bursa",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Szanghaj",
            isCorrect: false,
            id: uuid(),
          },
        ],
        shuffleAnswers: true,
        id: uuid(),
      },
      {
        content: "Polskim województwem o najmniejszej populacji jest:",
        answers: [
          {
            content: "Podkarpackie",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Lubuskie",
            isCorrect: false,
            id: uuid(),
          },
          {
            content: "Opolskie",
            isCorrect: true,
            id: uuid(),
          },
          {
            content: "Podlaskie",
            isCorrect: false,
            id: uuid(),
          },
        ],
        shuffleAnswers: true,
        id: uuid(),
      },
    ],
    id: uuid(),
  },
];
