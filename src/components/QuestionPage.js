import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import QuestionToAnswer from "./QuestionToAnswer";
import AnsweredQuestion from "./AnsweredQuestion";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";

const QuestionPage = () => {
  const { id } = useParams();
  const { question, user, answer, notFound } = useSelector((state) => {
    const question = state.questions[id];
    const notFound = true;
    if (question === undefined) {
      return { notFound };
    } else {
      const user = state.users[question.author];
      let answer = null;
      answer = question.optionOne.votes.includes(state.authedUser)
        ? "1"
        : question.optionTwo.votes.includes(state.authedUser)
        ? "2"
        : null;
      return {
        answer,
        question,
        user,
        id,
      };
    }
  });

  if (notFound) return <NotFound />;

  if (answer !== null) {
    return (
      <div>
        <AnsweredQuestion question={question} user={user} answer={answer} />
      </div>
    );
  }
  return (
    <div>
      <QuestionToAnswer id={id} />
    </div>
  );
};
export default QuestionPage;
