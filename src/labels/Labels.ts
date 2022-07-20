import { ILabelsPack } from "./interfaces/ILabelsPack";

const LABELS: ILabelsPack[] = [
  {
    intl: "en-EN",
    labels: {
      TITLE: "Quiz App",
      BACK_TO: "Strona główna",
      MAIN: "Aby rozpocząć, wybierz quiz z poniższej listy:",
      ONCE_AGAIN: "Jeszcze raz",
      SUBMIT: "Zakończ",
    },
  },
  {
    intl: "pl-PL",
    labels: {
      TITLE: "Quiz App",
      BACK_TO: "Main page",
      MAIN: "To start, select a quiz from the list below:",
      ONCE_AGAIN: "Once again",
      SUBMIT: "Submit answers",
    },
  },
];

export default LABELS[0].labels;
