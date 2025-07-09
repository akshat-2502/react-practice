import React, { useState } from "react";
import SearchText from "./components/SearchText";
import Counter from "./components/Counter";
import CounterUseReducer from "./components/CounterUseReducer";
import ParentInput from "./components/ParentInput";
import DebouncingSearch from "./components/DebouncingSearch";

const App = () => {
  return (
    <>
      <SearchText />
      <Counter />
      <CounterUseReducer />
      <ParentInput />
      <DebouncingSearch />
    </>
  );
};

export default App;
