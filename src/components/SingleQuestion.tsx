import { FC } from "react";

import SingleAnswer from "./SingleAnswer";
import { Question } from "../interfaces/Question";

interface QuestionProps {
  question: Question;
  count: number;
  total: number;
  reviewMode: boolean;
}

const SingleQuestion: FC<QuestionProps> = (props): JSX.Element => {
  const { question, count, total, reviewMode } = props;

  return (
    <div className="question">
      <header className="my-2">
        ({count}/{total})&nbsp;
        {question.content}
      </header>
      <section>
        {question.answers
          .sort(() => {
            if (question.shuffleAnswers) return Math.random() - 0.5;
            else return 0;
          })
          .map((answer) => (
            <SingleAnswer key={answer.id} answer={answer} reviewMode={reviewMode} />
          ))}
      </section>
    </div>
  );
};

export default SingleQuestion;
