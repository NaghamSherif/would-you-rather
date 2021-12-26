import React from "react";
import { connect } from "react-redux";
import QuestionToAnswer from "./QuestionToAnswer";
import AnsweredQuestion from "./AnsweredQuestion";
import NotFound from "./NotFound";

class QuestionPage extends React.Component {
  render() {
    if (this.props.notFound) {
      return <NotFound />;
    }
    const { question, user, answer } = this.props;

    if (this.props.answer !== null) {
      return (
        <div>
          <AnsweredQuestion question={question} user={user} answer={answer} />
        </div>
      );
    }
    return (
      <div>
        <QuestionToAnswer id={this.props.id} />
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const notFound = true;
  if (question === undefined) {
    return { notFound };
  } else {
    const user = users[question.author];
    let answer = null;
    answer = question.optionOne.votes.includes(authedUser)
      ? "1"
      : question.optionTwo.votes.includes(authedUser)
      ? "2"
      : null;
    return {
      answer,
      question,
      user,
      id,
    };
  }
}

export default connect(mapStateToProps)(QuestionPage);
