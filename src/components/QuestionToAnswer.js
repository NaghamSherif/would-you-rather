import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmitAnswer } from "../actions/shared";
import OptionsForm from "./OptionsForm";

const QuestionToAnswer = (props) => {
  const dispatch = useDispatch();
  const { question, user, authedUser } = useSelector((state) => {
    const question = state.questions[props.id];
    const user = state.users[question.author];
    const authedUser = state.authedUser;
    return {
      question,
      user,
      authedUser,
    };
  });

  const onSubmit = (e, answer) => {
    e.preventDefault();
    dispatch(handleSubmitAnswer(question.id, authedUser, answer));
  };

  const { optionOne, optionTwo } = question;
  const { name, avatarURL } = user;
  return (
    <div>
      <Card className="question-card">
        <Card.Title>{`${name} asked:`}</Card.Title>
        <div style={{ display: "inline-flex" }}>
          <Card.Img className="avatar" variant="top" src={avatarURL} />
          <div style={{ margin: "20px 0 0 10px" }}>
            <OptionsForm
              optionOne={optionOne.text}
              optionTwo={optionTwo.text}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default QuestionToAnswer;
