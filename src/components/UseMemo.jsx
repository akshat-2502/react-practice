import React, { useState } from "react";

const UseMemo = () => {
  const [inputNumber, setInputNumber] = useState(0);

  return (
    <div className="w-96 border-2 border-white p-4 flex items-center justify-center">
      <h1>Use Memo Usecase</h1>
    </div>
  );
};

export default UseMemo;
