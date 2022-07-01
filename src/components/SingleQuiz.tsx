import { useState } from "react";
import { quiz1 } from "../common/database";
import { Question } from "../interfaces/Question";
import SingleQuestion from "./SingleQuestion";

const Quiz = (): JSX.Element => {
  const [shuffleQuestions] = useState(quiz1.shuffleQuestions);

  return (
    <div className="container mt-3">
      <h2>{quiz1.name}</h2>
      <section>
        {quiz1.questions
          .sort((a: Question, b: Question) => {
            if (shuffleQuestions) return Math.random() - 0.5;
            else return 0;
          })
          .map((question) => (
            <SingleQuestion key={question.id} question={question} count={quiz1.questions.indexOf(question) + 1} total={quiz1.questions.length} />
          ))}
      </section>
    </div>
  );
};

export default Quiz;
