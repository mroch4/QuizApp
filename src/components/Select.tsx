import { ChangeEventHandler, FC } from "react";

import { Quiz } from "../common/interfaces/Quiz";
import { Quizzes } from "../common/Quizzes";

interface SelectSection {
  onChangeEvent: ChangeEventHandler<HTMLSelectElement>;
}

const Select: FC<SelectSection> = (props): JSX.Element => {
  const { onChangeEvent } = props;

  return (
    <select className="form-select my-2" onChange={onChangeEvent}>
      <option>...</option>
      {Quizzes.map((quiz: Quiz) => (
        <option key={quiz.id} value={quiz.name}>
          {quiz.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
