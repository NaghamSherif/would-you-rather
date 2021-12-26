import React from "react";
import { Card } from "react-bootstrap";

function AnsweredQuestion(props) {
  const { question, user, answer } = props;
  const optionOnePercentage =
    (question.optionOne.votes.length /
      (question.optionOne.votes.length + question.optionTwo.votes.length)) *
    100;

  return (
    <div>
      <Card className="question-card">
        <Card.Title>{`${user.name} asked:`}</Card.Title>
        <div style={{ display: "inline-flex" }}>
          <Card.Img className="avatar" variant="top" src={user.avatarURL} />
          <div style={{ margin: "20px 0 0 10px" }}></div>
          <ul style={{ margin: "0" }}>
            <li
              key={1}
            >{`1. ${question.optionOne.text} (${optionOnePercentage}%)`}</li>
            <li key={2}>{`2. ${question.optionTwo.text} (${
              100 - optionOnePercentage
            }%)`}</li>
            <li key={3}>{`You choose ${answer}`}</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default AnsweredQuestion;
