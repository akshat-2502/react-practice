import React, { useRef } from "react";
import ChildComponent from "./ChildComponent";

const ParentInput = () => {
  const inputRef = useRef();
  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button
        className="px-4 py-2 bg-blue-600 text-white mr-5 rounded-lg"
        onClick={() => inputRef.current.focus()}
      >
        Focus
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white mr-5 rounded-lg"
        onClick={() => inputRef.current.enable()}
      >
        Enable
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white mr-5 rounded-lg"
        onClick={() => inputRef.current.disable()}
      >
        Disable
      </button>
    </div>
  );
};

export default ParentInput;
