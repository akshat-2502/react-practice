import React from "react";

const user = {
  name: "Akshat",
  role: "Software Develoepr",
  location: "San Fransisco",
};

const ObjectMap = () => {
  return (
    <div>
      <h1>User Information</h1>
      <ul>
        {Object.entries(user).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectMap;
