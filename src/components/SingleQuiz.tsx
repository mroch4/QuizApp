import { FC, useEffect, useState } from "react";

import SingleQuestion from "./SingleQuestion";
import LABELS from "../common/labels";
import { Quiz } from "../interfaces/Quiz";
import { Question } from "../interfaces/Question";

interface QuizSection {
  quiz: Quiz;
}

const SingleQuiz: FC<QuizSection> = (props): JSX.Element => {
  const { quiz } = props;

  const [reviewMode, setReviewMode] = useState<boolean>(false);
  const shuffleItems = !reviewMode && quiz.shuffleQuestions;

  const handleOnClick = () => {
    setReviewMode(!reviewMode);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [reviewMode]);

  return (
    <div>
      <h4>{props.quiz.name}</h4>
      <section>
        {quiz.questions
          .sort(() => {
            if (shuffleItems) return Math.random() - 0.5;
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
      <footer>
        <button className="btn btn-primary" onClick={handleOnClick}>
          {reviewMode ? LABELS.ONCE_AGAIN : LABELS.SUBMIT}
        </button>
      </footer>
    </div>
  );
};

export default SingleQuiz;
