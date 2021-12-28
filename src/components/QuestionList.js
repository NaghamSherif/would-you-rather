import React from "react";
import Question from "./Question";

const QuestionsList = (props) => {
  return (
    <div className="question-list">
      <ul>
        {props.questions.map((id) => (
          <li key={id}>
            <Question key={id} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default QuestionsList;
