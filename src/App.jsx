import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home";

const About = lazy(() => import("./components/LazyLoading"));
const Aboutan0ther = lazy(() => import("./components/LazyLoadingAnother"));
const Fruits = lazy(() => import("./components/FruitsRadion"));
const ObjectMap = lazy(() => import("./components/ObjectMap"));

const App = () => {
  return (
    <UserProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutanother" element={<Aboutan0ther />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/map" element={<ObjectMap />} />
        </Routes>
      </Suspense>
    </UserProvider>
  );
};

export default App;
