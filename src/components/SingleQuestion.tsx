import { FC, useState } from "react";
import { Answer } from "../interfaces/Answer";
import { Question } from "../interfaces/Question";
import SingleAnswer from "./SingleAnswer";

interface QuestionProps {
  question: Question;
  count: number;
  total: number;
}

const SingleQuestion: FC<QuestionProps> = (props): JSX.Element => {
  const [shuffleAnswers] = useState(props.question.shuffleAnswers);

  return (
    <div className="question">
      <header className="my-2">
        ({props.count}/{props.total})&nbsp;
        {props.question.content}
      </header>
      <section>
        {props.question.answers
          .sort((a: Answer, b: Answer) => {
            if (shuffleAnswers) return Math.random() - 0.5;
            else return 0;
          })
          .map((answer) => (
            <SingleAnswer key={answer.id} answer={answer} />
          ))}
      </section>
    </div>
  );
};

export default SingleQuestion;
