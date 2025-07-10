import React from "react";
import SearchText from "./components/SearchText";
import Counter from "./components/Counter";
import CounterUseReducer from "./components/CounterUseReducer";
import ParentInput from "./components/ParentInput";
import DebouncingSearch from "./components/DebouncingSearch";
import CustomHookParent from "./components/CustomHookParent";
import ForceUpdate from "./components/ForceUpdate";
import RemainingText from "./components/RemainingText";

const App = () => {
  return (
    <>
      <SearchText />
      <Counter />
      <CounterUseReducer />
      <ParentInput />
      <DebouncingSearch />
      <CustomHookParent />
      <ForceUpdate />
      <RemainingText />
    </>
  );
};

export default App;
