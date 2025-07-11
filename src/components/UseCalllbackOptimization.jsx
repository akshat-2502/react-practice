import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child is rendered");
  return (
    <button className="px-5 py-2 bg-blue-500 " onClick={onClick}>
      Click Me
    </button>
  );
});

const UseCalllbackOptimization = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []); //memoised forever

  //   const handleClick = () => {
  //     console.log("Button Clicked");
  //   }; //memoised forever removed

  return (
    <div>
      <input
        type="number"
        placeholder="Enter Number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <Child onClick={handleClick} />
    </div>
  );
};

export default UseCalllbackOptimization;
