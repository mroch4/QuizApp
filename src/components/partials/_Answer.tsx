import { FC, useState } from "react";

import { IAnswer } from "../interfaces/IAnswer";

const Answer: FC<IAnswer> = (props): JSX.Element => {
  const { answer, reviewMode } = props;

  const [checked, setChecked] = useState<boolean>(false);

  const handleOnClick = () => {
    setChecked(!checked);
  };

  const getCSSclasses = () => {
    let CSSclasses = "card answer";
    if (!reviewMode) {
      if (checked) CSSclasses += " checked";
    } else {
      CSSclasses = "card answer disabled";
      if (checked) {
        if (answer.isCorrect) CSSclasses += " goodAns";
        else CSSclasses += " wrongAns";
      } else {
        if (answer.isCorrect) CSSclasses += " shouldBe";
      }
    }
    return CSSclasses;
  };

  return (
    <div className={getCSSclasses()} onClick={handleOnClick}>
      <span>{answer.content}</span>
    </div>
  );
};

export default Answer;
