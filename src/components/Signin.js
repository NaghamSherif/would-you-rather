import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoImg from "../icons/react-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown, Card } from "react-bootstrap";
import { setAuthedUser } from "../actions/authedUser";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const { userNames } = useSelector((state) => {
    return {
      userNames: Object.values(state.users).map((user) => ({
        id: user.id,
        name: user.name,
      })),
    };
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(id));
  };

  const handleSubmit = (e) => setId(e);

  return (
    <Card className="card">
      <Card.Title className="text-center">
        Welcom to the Would You Rather App!
      </Card.Title>
      <Card.Subtitle className="text-center">
        Please sign in to continue
      </Card.Subtitle>
      <Card.Img className="sign-in-logo" variant="top" src={LogoImg} />
      <DropdownButton
        onSelect={handleSubmit}
        style={{
          height: "85px",
          margin: "auto",
        }}
        title="Select a username"
        variant="light"
      >
        {userNames.map((username) => (
          <Dropdown.Item eventKey={username.id} key={username.id}>
            {username.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <Link to="/" onClick={handleSignIn} style={{ margin: "auto" }}>
        Sign in
      </Link>
    </Card>
  );
};
export default Signin;
