import React from "react";
import { useUser } from "../context/UserContext";

const DisplayUser = () => {
  const { user } = useUser();
  return (
    <div className="border p-4">
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};

export default DisplayUser;
