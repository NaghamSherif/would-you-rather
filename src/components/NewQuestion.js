import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Card } from "react-bootstrap";
import QuestionForm from "./QuestionForm";
import { handleAddQuestion } from "../actions/shared";
import { useNavigate } from "react-router-dom";

const NewQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authedUser = useSelector((state) => state.authedUser);

  const onSubmit = (e, option1, option2) => {
    e.preventDefault();
    dispatch(handleAddQuestion(option1, option2, authedUser));
    navigate(`/`);
  };
  return (
    <Card className="card">
      <Card.Title className="text-center">Create New Question</Card.Title>
      <Card.Subtitle style={{ margin: "0 0 10px 0" }}>
        Complete the question:
      </Card.Subtitle>
      <Card.Subtitle style={{ fontWeight: "normal" }}>
        Would you rathed ...
      </Card.Subtitle>
      <QuestionForm onSubmit={onSubmit} />
    </Card>
  );
};
export default NewQuestion;
