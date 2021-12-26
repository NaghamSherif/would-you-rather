import React from "react";
import { connect } from "react-redux";
import LogoImg from "../icons/react-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown, Card } from "react-bootstrap";
import { setAuthedUser } from "../actions/authedUser";
import { Link } from "react-router-dom";

class Signin extends React.Component {
  state = {
    id: "",
  };
  handleSignIn = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthedUser(this.state.id));
  };
  handleSubmit = (e) => {
    const id = e;

    this.setState(() => ({
      id,
    }));
  };
  render() {
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
          onSelect={this.handleSubmit}
          style={{
            height: "85px",
            margin: "auto",
          }}
          title="Select a username"
          variant="light"
        >
          {this.props.userNames.map((username) => (
            <Dropdown.Item eventKey={username.id} key={username.id}>
              {username.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Link to="/" onClick={this.handleSignIn} style={{ margin: "auto" }}>
          Sign in
        </Link>
      </Card>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userNames: Object.values(users).map((user) => ({
      id: user.id,
      name: user.name,
    })),
  };
}

export default connect(mapStateToProps)(Signin);
