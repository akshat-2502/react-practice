import React, { useState } from "react";
import SearchText from "./components/SearchText";
import Counter from "./components/Counter";
import CounterUseReducer from "./components/CounterUseReducer";

const App = () => {
  return (
    <>
      <SearchText />
      <Counter />
      <CounterUseReducer />
    </>
  );
};

export default App;
