import React, { useRef } from "react";

const RemainingText = () => {
  const textRef = useRef(null);
  const limit = 150;
  const remainingText = useRef(limit);

  const handleInput = () => {
    const currentLength = textRef.current.value.length;
    const remaining = limit - currentLength;
    remainingText.current.innerText = `${remaining} characters remaining`;
  };
  return (
    <div>
      <h2>Remaining Text</h2>
      <textarea
        placeholder="Type here"
        ref={textRef}
        rows="5"
        cols="40"
        onInput={handleInput}
        maxLength={limit}
      />
      <p ref={remainingText}>{limit} char remaining</p>
    </div>
  );
};

export default RemainingText;
