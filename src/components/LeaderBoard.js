import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const LeaderBoard = () => {
  const { sortedUsers } = useSelector((state) => {
    const arr = Object.values(state.users);
    const sorted = arr.sort((a, b) => {
      const lengthB = Object.values(b.answers).length + b.questions.length;
      const lengthA = Object.values(a.answers).length + a.questions.length;
      return lengthB - lengthA;
    });
    return {
      sortedUsers: sorted,
    };
  });

  return (
    <div>
      {sortedUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
export default LeaderBoard;
