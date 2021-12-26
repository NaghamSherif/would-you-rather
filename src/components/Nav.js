import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeAuthedUser } from "../actions/authedUser";

class Nav extends React.Component {
  handleClick = () => {
    this.props.dispatch(removeAuthedUser());
  };
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" activeclassname="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/add" activeclassname="active">
              New Question
            </Link>
          </li>
          <li>
            <Link to="/leaderboard" activeclassname="active">
              LeaderBoard
            </Link>
          </li>
          <li>
            <Link to="/" onClick={this.handleClick}>
              logout
            </Link>
          </li>
          {this.props.username !== null && (
            <li>
              <Link
                style={{
                  pointerEvents: "none",
                  color: "black",
                  textDecoration: "none",
                }}
                to="/"
              >
                {`hello, ${this.props.username}`}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    username: authedUser === null ? null : users[authedUser].name,
  };
}

export default connect(mapStateToProps)(Nav);
