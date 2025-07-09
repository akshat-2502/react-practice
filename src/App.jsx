import React from "react";
import SearchText from "./components/SearchText";
import Counter from "./components/Counter";
import CounterUseReducer from "./components/CounterUseReducer";
import ParentInput from "./components/ParentInput";
import DebouncingSearch from "./components/DebouncingSearch";
import CustomHookParent from "./components/CustomHookParent";

const App = () => {
  return (
    <>
      <SearchText />
      <Counter />
      <CounterUseReducer />
      <ParentInput />
      <DebouncingSearch />
      <CustomHookParent />
    </>
  );
};

export default App;
