import { ChangeEvent, useState } from "react";

import Select from "./Select";
import SingleQuiz from "./SingleQuiz";
import { quizzes } from "../common/database";
import LABELS from "../common/labels";
import { Quiz } from "../interfaces/Quiz";

const Layout = (): JSX.Element => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz>();

  const handleOnChange = (quizName: string) => {
    const selectedQuiz = quizzes.find((quiz) => quiz.name === quizName);
    setCurrentQuiz(selectedQuiz);
  };

  return (
    <div className="container mt-3">
      <header>
        <h2>{LABELS.TITLE}</h2>
        {currentQuiz !== undefined ? (
          <button className="btn btn-primary" onClick={() => setCurrentQuiz(undefined)}>
            {LABELS.BACK_TO}
          </button>
        ) : null}
      </header>
      {currentQuiz === undefined ? (
        <>
          <span>{LABELS.MAIN}</span>
          <Select onChangeEvent={(e: ChangeEvent<HTMLSelectElement>) => handleOnChange(e.currentTarget.value)} />
        </>
      ) : null}
      {currentQuiz !== undefined ? <SingleQuiz quiz={currentQuiz} /> : null}
    </div>
  );
};

export default Layout;
