import React from "react";
import { connect } from "react-redux";
import { Nav, Card } from "react-bootstrap";
import QuestionsList from "./QuestionList";

class Dashboard extends React.Component {
  state = {
    nav: "",
  };

  onNavigation = (e) => {
    this.setState(() => ({
      nav: e.target.dataset.rbEventKey,
    }));
  };

  render() {
    const { answeredQuestionsId, unAnsweredQuestionsId } = this.props;
    return (
      <Card className="card">
        <Card.Header>
          <Nav
            variant="tabs"
            defaultActiveKey="un-answered"
            onClick={this.onNavigation}
          >
            <Nav.Item>
              <Nav.Link eventKey="un-answered">Unanswered Questions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link herf="#answered" eventKey="answered">
                Answered Questions
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        {this.state.nav === "answered" ? (
          <QuestionsList questions={answeredQuestionsId} />
        ) : (
          <QuestionsList questions={unAnsweredQuestionsId} />
        )}
      </Card>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  const answered = Object.values(questions).filter((q) => {
    if (
      q.optionOne.votes.includes(authedUser) ||
      q.optionTwo.votes.includes(authedUser)
    )
      return true;
    return false;
  });
  const unanswered = Object.values(questions).filter((q) => {
    if (
      !q.optionOne.votes.includes(authedUser) &&
      !q.optionTwo.votes.includes(authedUser)
    )
      return true;
    return false;
  });
  return {
    answeredQuestionsId: answered
      ? answered.sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id)
      : null,
    unAnsweredQuestionsId: unanswered
      ? unanswered.sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id)
      : null,
  };
}

export default connect(mapStateToProps)(Dashboard);
