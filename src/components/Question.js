import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Question = (props) => {
  const { id } = props;
  const { question, user } = useSelector((state) => {
    const question = state.questions[props.id];
    const user = state.users[question.author];
    return {
      question,
      user,
    };
  });
  return user === undefined ? (
    <div>error</div>
  ) : (
    <Card className="question-card">
      <Card.Title>{`${user.name} asked:`}</Card.Title>
      <div style={{ display: "inline-flex" }}>
        <Card.Img className="avatar" variant="top" src={user.avatarURL} />
        <div style={{ margin: "20px 0 0 10px" }}>
          <Card.Text>{`${question.optionOne.text}...`}</Card.Text>
          <Link to={`/question/${id}`}>
            <Button style={{ margin: "0px" }}>View all</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
export default Question;
