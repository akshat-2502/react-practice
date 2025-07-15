import React from "react";
import SearchText from "../components/SearchText";
import Counter from "../components/Counter";
import CounterUseReducer from "../components/CounterUseReducer";
import ParentInput from "../components/ParentInput";
import DebouncingSearch from "../components/DebouncingSearch";
import CustomHookParent from "../components/CustomHookParent";
import ForceUpdate from "../components/ForceUpdate";
import RemainingText from "../components/RemainingText";
import Dropdown from "../components/Dropdown";

import DisplayUser from "../components/DisplayUser";
import UseMemo from "../components/UseMemo";
import UseCalllbackOptimization from "../components/UseCalllbackOptimization";
import ClassBasedCounter from "../components/ClassBasedComponent";
import HigherOrderComponent from "../components/HigherOrderComponent";
import HigherOrderComponentLoading from "../components/HigherOrderComponentLoading";
import Pagination from "../components/Pagination";
import DropdownValueInTextbox from "../components/DropdownValueInTextbox";

const Home = () => {
  return (
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
      <UseCalllbackOptimization />
      <ClassBasedCounter />
      <HigherOrderComponent />
      <HigherOrderComponentLoading />
      <Pagination />
      <DropdownValueInTextbox />
    </div>
  );
};

export default Home;
