import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { removeAuthedUser } from "../actions/authedUser";
import Signin from "./Signin";

const Nav = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => {
    return {
      username:
        state.authedUser === null || state.authedUser === ""
          ? null
          : state.users[state.authedUser].name,
    };
  }, shallowEqual);

  const handleClick = () => dispatch(removeAuthedUser());
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
          <Link to="/" onClick={handleClick}>
            logout
          </Link>
        </li>
        {username !== null && (
          <li>
            <Link
              style={{
                pointerEvents: "none",
                color: "black",
                textDecoration: "none",
              }}
              to="/"
            >
              {`hello, ${username}`}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Nav;
