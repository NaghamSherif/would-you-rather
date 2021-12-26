import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading-bar";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
  form: formReducer,
});
