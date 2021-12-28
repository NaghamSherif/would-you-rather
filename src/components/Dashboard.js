import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Nav, Card } from "react-bootstrap";
import QuestionsList from "./QuestionList";

const Dashboard = () => {
  const [nav, setNav] = useState("");

  const onNavigation = (e) => {
    setNav(e.target.dataset.rrUiEventKey);
  };

  const { answeredQuestionsId, unAnsweredQuestionsId, authedUser } =
    useSelector((state) => {
      const answered = Object.values(state.questions).filter((q) => {
        if (
          q.optionOne.votes.includes(state.authedUser) ||
          q.optionTwo.votes.includes(state.authedUser)
        )
          return true;
        return false;
      });
      const unanswered = Object.values(state.questions).filter((q) => {
        if (
          !q.optionOne.votes.includes(state.authedUser) &&
          !q.optionTwo.votes.includes(state.authedUser)
        )
          return true;
        return false;
      });
      return {
        answeredQuestionsId: answered
          ? answered.sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id)
          : null,
        unAnsweredQuestionsId: unanswered
          ? unanswered
              .sort((a, b) => b.timestamp - a.timestamp)
              .map((q) => q.id)
          : null,
        authedUser: state.authedUser,
      };
    }, shallowEqual);

  return (
    <Card className="card">
      <Card.Header>
        <Nav
          variant="tabs"
          defaultActiveKey="un-answered"
          onClick={onNavigation}
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
      {nav === "answered" ? (
        <QuestionsList questions={answeredQuestionsId} />
      ) : (
        <QuestionsList questions={unAnsweredQuestionsId} />
      )}
    </Card>
  );
};
export default Dashboard;
