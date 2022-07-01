import { FC, useState } from "react";
import { Answer } from "./../interfaces/Answer";

interface AnswerProps {
  answer: Answer;
}

const SingleAnswer: FC<AnswerProps> = (props): JSX.Element => {
  const [checked, setChecked] = useState(false);

  const handleOnClick = () => {
    setChecked(!checked);
  };

  return (
    <div className={checked ? "card answer checked" : "card answer"} onClick={handleOnClick}>
      <span>{props.answer.content}</span>
    </div>
  );
};

export default SingleAnswer;
