import React, { useState } from "react";

const AddingDataToState = () => {
  const [data, setdata] = useState([]);
  const [input, setINput] = useState("");

  const addData = () => {
    setdata((prev) => [...prev, input]);
    setINput("");
  };

  return (
    <div>
      <input
        className="border p-2"
        type="text"
        value={input}
        onChange={(e) => setINput(e.target.value)}
        placeholder="type here"
      />
      <button
        className="bg-blue-500 px-4 py-2 ml-4 rounded-xl"
        onClick={addData}
      >
        Enter
      </button>
      <p>{data}, </p>
    </div>
  );
};

export default AddingDataToState;
