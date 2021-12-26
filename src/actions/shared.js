import { _getQuestions, _getUsers } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";

export const ADD_QUESTION = "ADD_QUESTION";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getQuestions(), _getUsers()]).then(
      ([questions, users]) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
        dispatch(hideLoading());
      }
    );
  };
}

function submitAnswer(qid, authedUser, answer) {
  return {
    type: SUBMIT_ANSWER,
    qid,
    authedUser,
    answer,
  };
}

export function handleSubmitAnswer(qid, authedUser, answer) {
  return (dispatch) => {
    dispatch(submitAnswer(qid, authedUser, answer));
    return _saveQuestionAnswer({ authedUser, qid, answer }).catch(() => {
      alert("There was an error submitting your answer, try again.");
    });
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
    authedUser: question.author,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return _saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(addQuestion(question));
      }
    );
  };
}
