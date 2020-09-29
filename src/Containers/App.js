import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Sonder from "../Components/Pages/Projects/Sonder/Sonder";
import StickyNav from "../Components/UI/StickyNav/StickyNav";

function App() {
  return (
    <BrowserRouter>
      <StickyNav />
      <Route path="/" component={Home} exact />
      {/* <Route path="/projects/Sonder" component={Sonder} /> */}
    </BrowserRouter>
  );
}

export default App;
