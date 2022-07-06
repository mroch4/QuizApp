import { ChangeEventHandler, FC } from "react";

import { quizzes } from "../common/database";
import { Quiz } from "../interfaces/Quiz";

interface SelectSection {
  onChangeEvent: ChangeEventHandler<HTMLSelectElement>;
}

const Select: FC<SelectSection> = (props): JSX.Element => {
  const { onChangeEvent } = props;

  return (
    <select className="form-select my-2" onChange={onChangeEvent}>
      <option>...</option>
      {quizzes.map((quiz: Quiz) => (
        <option key={quiz.id} value={quiz.name}>
          {quiz.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
