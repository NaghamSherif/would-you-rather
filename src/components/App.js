import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import Nav from "./Nav";
import NotFound from "./NotFound";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          {this.props.authedUser ? (
            <Signin />
          ) : (
            <div>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/question/:id" component={QuestionPage} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route component={NotFound} />
              </Switch>
            </div>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
