import { FC, useEffect, useState } from "react";

import { IQuiz } from "../interfaces/IQuiz";
import { Question } from "../../common/interfaces/Question";
import SingleQuestion from "./_Question";
import labels from "../../labels/Labels";

const Quiz: FC<IQuiz> = (props): JSX.Element => {
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
        <button className="btn btn-outline-primary" onClick={handleOnClick}>
          {reviewMode ? labels.ONCE_AGAIN : labels.SUBMIT}
        </button>
      </footer>
    </div>
  );
};

export default Quiz;
