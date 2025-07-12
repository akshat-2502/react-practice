import React from "react";

const Card = ({ user }) => {
  return (
    <div className="w-36 h-36 border-4 border-purple-600 rounded-xl flex flex-col items-center justify-center">
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
    </div>
  );
};

export default Card;
