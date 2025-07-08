import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Counter</div>
      <button
        className="bg-blue-500 px-4 py-2 rounded-xl"
        onClick={() => setCounter(counter + 1)}
      >
        Counter {counter}
      </button>
    </div>
  );
};

export default Counter;
