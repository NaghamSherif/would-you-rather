import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import QuestionForm from "./QuestionForm";
import { handleAddQuestion } from "../actions/shared";
import { withRouter } from "react-router-dom";

class NewQuestion extends React.Component {
  onSubmit = (e, option1, option2) => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;
    dispatch(handleAddQuestion(option1, option2, authedUser));
    this.props.history.push(`/`);
  };
  render() {
    return (
      <Card className="card">
        <Card.Title className="text-center">Create New Question</Card.Title>
        <Card.Subtitle style={{ margin: "0 0 10px 0" }}>
          Complete the question:
        </Card.Subtitle>
        <Card.Subtitle style={{ fontWeight: "normal" }}>
          Would you rathed ...
        </Card.Subtitle>
        <QuestionForm onSubmit={this.onSubmit} />
      </Card>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(NewQuestion));
