import React from "react";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Data,
} from "./components";

const App = () => {
  return (
    <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
        </Routes>
    </Router>
);
};

serviceWorker.unregister();
export default App;
