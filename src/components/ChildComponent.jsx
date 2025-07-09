import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    enable: () => {
      inputRef.current.disabled = false;
    },
    disable: () => {
      inputRef.current.disabled = true;
    },
    placeholder: () => {
      inputRef.current.placeholder = "Placeholder Changed";
    },
  }));

  return (
    <div>
      <input type="text" placeholder="Enter here..." ref={inputRef} />
    </div>
  );
});

export default ChildComponent;
