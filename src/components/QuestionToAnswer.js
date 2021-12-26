import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { handleSubmitAnswer } from "../actions/shared";
import OptionsForm from "./OptionsForm";

class QuestionToAnswer extends React.Component {
  onSubmit = (e, answer) => {
    e.preventDefault();

    const { dispatch, question, authedUser } = this.props;
    dispatch(handleSubmitAnswer(question.id, authedUser, answer));
  };

  render() {
    const { question, user } = this.props;
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
                onSubmit={this.onSubmit}
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];
  const user = users[question.author];
  return {
    question,
    user,
    authedUser,
  };
}

export default connect(mapStateToProps)(QuestionToAnswer);
