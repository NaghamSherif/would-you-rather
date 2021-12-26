import React from "react";
import Question from "./Question";

class QuestionsList extends React.Component {
  render() {
    return (
      <div className="question-list">
        <ul>
          {this.props.questions.map((id) => (
            <li key={id}>
              <Question key={id} id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default QuestionsList;
