import React, { useEffect, useState } from "react";
import Loading from "../HOC/Loading";
import UserList from "./UserList";

const UserListWithLoading = Loading(UserList);

const HigherOrderComponentLoading = () => {
  const [users, setUsers] = useState([]);
  const [loadimg, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Akshat" },
        { id: 2, name: "Ball" },
        { id: 3, name: "Ujjwal" },
        { id: 4, name: "Kushagra" },
        { id: 5, name: "Divyam" },
      ]);
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="pb-10">
      <UserListWithLoading isLoading={loadimg} users={users} />
    </div>
  );
};

export default HigherOrderComponentLoading;
