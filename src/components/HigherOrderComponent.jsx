import React, { useEffect, useState } from "react";
import IsAdmin from "../HOC/Admin";
import Card from "./Card";

const CardWithAdminTag = IsAdmin(Card);

const HigherOrderComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      { id: 1, name: "Akshat", age: 24, isAdmin: true },
      { id: 2, name: "Ujjawal", age: 23, isAdmin: false },
      { id: 3, name: "Kushagra", age: 18, isAdmin: false },
      { id: 4, name: "Divyam", age: 24, isAdmin: false },
    ]);
  }, []);
  return (
    <div className="flex flex-wrap mt-10 relative">
      {users.map((user) => (
        <div key={user.id}>
          <CardWithAdminTag user={user} />
        </div>
      ))}
    </div>
  );
};

export default HigherOrderComponent;
