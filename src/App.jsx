import React, { lazy, Suspense } from "react";
import { UserProvider } from "./context/UserContext";

import { Route, Router } from "react-router-dom";
import Home from "./pages/Home";
const About = lazy(() => import("./components/LazyLoading"));

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<LazyLoading />} />
        </Suspense>
      </UserProvider>
    </Router>
  );
};

export default App;
