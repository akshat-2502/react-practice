import React, { useReducer } from "react";

const CounterUseReducer = () => {
  const reducer = (state, action) => {
    if (action.type === "increment") {
      return state + 1;
    }
    if (action.type === "decrement") {
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded-xl mr-5"
        onClick={() => dispatch({ type: "increment" })}
      >
        ADD
      </button>
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded-xl"
        onClick={() => dispatch({ type: "decrement" })}
      >
        REMOVE
      </button>
    </div>
  );
};

export default CounterUseReducer;
