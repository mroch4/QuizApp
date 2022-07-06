import { FC, useState } from "react";

import SingleQuestion from "./SingleQuestion";
import LABELS from "../common/labels";
import { Quiz } from "../interfaces/Quiz";
import { Question } from "../interfaces/Question";

interface QuizSection {
  quiz: Quiz;
}

const SingleQuiz: FC<QuizSection> = (props): JSX.Element => {
  const { quiz } = props;

  const [reviewMode, setReviewMode] = useState(false);

  return (
    <div>
      <h4>{props.quiz.name}</h4>
      <section>
        {quiz.questions
          .sort(() => {
            if (quiz.shuffleQuestions) return Math.random() - 0.5;
            else return 0;
          })
          .map((question: Question) => (
            <SingleQuestion
              key={question.id}
              question={question}
              count={quiz.questions.indexOf(question) + 1}
              total={quiz.questions.length}
              reviewMode={reviewMode}
            />
          ))}
      </section>
      <button className="btn btn-primary">{LABELS.SUBMIT}</button>
      <div className="form-check my-3">
        <input className="form-check-input" type="checkbox" checked={reviewMode} onClick={() => setReviewMode(!reviewMode)} />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          [Review Mode]
        </label>
      </div>
    </div>
  );
};

export default SingleQuiz;
