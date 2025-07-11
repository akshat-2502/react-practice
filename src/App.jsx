import React from "react";
import SearchText from "./components/SearchText";
import Counter from "./components/Counter";
import CounterUseReducer from "./components/CounterUseReducer";
import ParentInput from "./components/ParentInput";
import DebouncingSearch from "./components/DebouncingSearch";
import CustomHookParent from "./components/CustomHookParent";
import ForceUpdate from "./components/ForceUpdate";
import RemainingText from "./components/RemainingText";
import Dropdown from "./components/Dropdown";
import { UserProvider } from "./context/UserContext";
import DisplayUser from "./components/DisplayUser";
import UseMemo from "./components/UseMemo";

const App = () => {
  return (
    <UserProvider>
      <div className="bg-zinc-950 text-zinc-300">
        <SearchText />
        <Counter />
        <CounterUseReducer />
        <ParentInput />
        <DebouncingSearch />
        <CustomHookParent />
        <ForceUpdate />
        <RemainingText />
        <Dropdown />
        <DisplayUser />
        <UseMemo />
      </div>
    </UserProvider>
  );
};

export default App;
