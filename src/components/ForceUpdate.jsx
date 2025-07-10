import React, { useReducer } from "react";

const ForceUpdate = () => {
  const forceUpdateReducer = (x) => x + 1;
  const [, forceUpdate] = useReducer(forceUpdateReducer, 0);
  console.log("🔁 Component rendered");
  return (
    <div>
      <p>Force Update without using useState</p>
      <p>Check console for re-render</p>
      <button
        className="px-5 py-2 bg-blue-400 text-white hover:bg-blue-600 cursor-pointer"
        onClick={forceUpdate}
      >
        Force Update!
      </button>
    </div>
  );
};

export default ForceUpdate;
