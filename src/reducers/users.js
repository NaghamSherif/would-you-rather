import { RECEIVE_USERS } from "../actions/users";
import { SUBMIT_ANSWER, ADD_QUESTION } from "../actions/shared";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SUBMIT_ANSWER:
      const { qid, answer, authedUser } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([
            action.question.id,
          ]),
        },
      };
    default:
      return state;
  }
}
