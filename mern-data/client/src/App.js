import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Data,
} from "./components";

const App = () => {
ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" component={<Home />} />
      <Route path="/data" component={<Data />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
};

serviceWorker.unregister();
export default App;
