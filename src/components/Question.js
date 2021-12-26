import React from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Question(props) {
  const { question, user, id } = props;

  return (
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
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const user = users[question.author];
  return {
    question,
    user,
  };
}

export default connect(mapStateToProps)(Question);
