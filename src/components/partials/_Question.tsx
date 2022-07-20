import { FC } from "react";
import { IQuestion } from "../interfaces/IQuestion";
import SingleAnswer from "./_Answer";

const Question: FC<IQuestion> = (props): JSX.Element => {
  const { question, count, total, reviewMode } = props;

  const shuffleItems = !reviewMode && question.shuffleAnswers;

  return (
    <div className="question">
      <div className="header">
        ({count}/{total})&nbsp;
        <span>{question.content}</span>
      </div>
      <section>
        {question.answers
          .sort(() => {
            if (shuffleItems) return Math.random() - 0.5;
            else return 0;
          })
          .map((answer) => (
            <SingleAnswer key={answer.id} answer={answer} reviewMode={reviewMode} />
          ))}
      </section>
    </div>
  );
};

export default Question;
