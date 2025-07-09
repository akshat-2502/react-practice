import React, { useRef } from "react";
import ChildComponent from "./ChildComponent";

const ParentInput = () => {
  const inputRef = useRef();
  return (
    <div className="mt-10 p-6">
      <ChildComponent ref={inputRef} />
      <button
        className="px-4 py-2 bg-blue-600 text-white mr-5 rounded-lg cursor-pointer hover:bg-blue-500"
        onClick={() => inputRef.current.focus()}
      >
        Focus
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white mr-5 rounded-lg cursor-pointer hover:bg-blue-500"
        onClick={() => inputRef.current.enable()}
      >
        Enable
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white mr-5 rounded-lg cursor-pointer hover:bg-blue-500"
        onClick={() => inputRef.current.disable()}
      >
        Disable
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white mr-5 rounded-lg cursor-pointer hover:bg-blue-500"
        onClick={() => inputRef.current.placeholder()}
      >
        Placeholder
      </button>
    </div>
  );
};

export default ParentInput;
