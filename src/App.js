import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Sonder from "./Components/Pages/Projects/Sonder/Sonder";
import FeedMe from "./Components/Pages/Projects/FeedMe/FeedMe";
import Footer from "./Components/Layout/Footer/Footer";
import StickyContact from "./Components/UI/StickyContact/StickyContact";
import StickyNav from "./Components/UI/StickyNav/StickyNav";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/projects/Sonder" component={Sonder} />
      <Route path="/projects/FeedMe" component={FeedMe} />
      <StickyNav />
      <StickyContact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
