import React from "react";
import { Card } from "react-bootstrap";

function User(props) {
  const { user } = props;
  const answeredCount = Object.values(user.answers).length;
  const createdCount = user.questions.length;
  return (
    <div>
      <Card className="question-card">
        <Card.Title>{user.name}</Card.Title>
        <div style={{ display: "inline-flex" }}>
          <Card.Img className="avatar" variant="top" src={user.avatarURL} />
          <div style={{ margin: "20px 0 0 10px" }}></div>
          <ul style={{ margin: "0" }}>
            <li key={1}>{`Answered questions= ${answeredCount}`}</li>
            <li key={2}>{`Created questions ${createdCount}`}</li>
            <li key={3}>{`Score ${createdCount + answeredCount}`}</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default User;
