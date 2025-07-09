import React, { useState } from "react";
import SearchText from "./components/SearchText";
import Counter from "./components/Counter";
import CounterUseReducer from "./components/CounterUseReducer";
import ParentInput from "./components/ParentInput";

const App = () => {
  return (
    <>
      <SearchText />
      <Counter />
      <CounterUseReducer />
      <ParentInput />
    </>
  );
};

export default App;
