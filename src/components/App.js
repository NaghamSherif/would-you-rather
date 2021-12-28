import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import Nav from "./Nav";
import NotFound from "./NotFound";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  });

  const authedUser = useSelector(
    (state) => state.authedUser === null || state.authedUser === "",
    shallowEqual
  );

  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        {authedUser ? (
          <Signin />
        ) : (
          <div>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/add" element={<NewQuestion />} />
              <Route path="/question/:id" element={<QuestionPage />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
              <Route element={<NotFound />} />
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
