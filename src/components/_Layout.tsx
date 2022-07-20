import { ChangeEvent, useState } from "react";

import { Quiz } from "../common/interfaces/Quiz";
import { Quizzes } from "../common/Quizzes";
import Select from "./Select";
import SingleQuiz from "./partials/_Quiz";
import labels from "../labels/Labels";

const Layout = (): JSX.Element => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz>();

  const handleOnChange = (quizName: string) => {
    const selectedQuiz = Quizzes.find((quiz) => quiz.name === quizName);
    setCurrentQuiz(selectedQuiz);
  };

  return currentQuiz === undefined ? (
    <div className="container mt-3">
      <header>
        <h2 className="pointer" onClick={() => setCurrentQuiz(undefined)}>{labels.TITLE}</h2>
      </header>
      <span>{labels.MAIN}</span>
      <Select onChangeEvent={(e: ChangeEvent<HTMLSelectElement>) => handleOnChange(e.currentTarget.value)} />
    </div>
  ) : (
    <div className="container mt-3">
      <header>
        <h2 className="pointer" onClick={() => setCurrentQuiz(undefined)}>{labels.TITLE}</h2>
        <button className="btn btn-outline-secondary" onClick={() => setCurrentQuiz(undefined)}>
          {labels.BACK_TO}
        </button>
      </header>
      <SingleQuiz quiz={currentQuiz} />
    </div>
  );
};

export default Layout;
