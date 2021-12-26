import React from "react";
import { connect } from "react-redux";
import User from "./User";

class LeaderBoard extends React.Component {
  render() {
    return (
      <div>
        {this.props.sortedUsers.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const arr = Object.values(users);
  const sorted = arr.sort((a, b) => {
    const lengthB = Object.values(b.answers).length + b.questions.length;
    const lengthA = Object.values(a.answers).length + a.questions.length;
    return lengthB - lengthA;
  });
  return {
    sortedUsers: sorted,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
