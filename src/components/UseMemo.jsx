import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [inputNumber, setInputNumber] = useState();
  const [dark, setDark] = useState(false);

  const square = useMemo(() => {
    let sum = 0;
    for (let i = 0; i <= inputNumber; i++) {
      sum = sum + i;
    }
    return sum;
  }, [inputNumber]);

  //   const square = () => {
  //     let sum = 0;
  //     for (let i = 0; i <= inputNumber; i++) {
  //       sum = sum + i;
  //     }
  //     return sum;
  //   };

  return (
    <div
      className={`w-96 h-96 bg-white text-black border-2 border-white p-4 flex flex-col items-center ${
        dark ? "bg-zinc-950 text-white" : ""
      }`}
    >
      <h1 className="flex items-center justify-center">Use Memo Usecase</h1>
      <button
        onClick={() => setDark(!dark)}
        className="px-5 py-2 rounded-xl font-bold bg-green-500 text-white"
      >
        {dark ? "Light Theme" : "Dark Theme"}
      </button>
      <input
        type="number"
        className="border px-6 py-2 mt-4"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        placeholder="Enter Number..."
      />
      <p>Result : {square}</p>
    </div>
  );
};

export default UseMemo;
