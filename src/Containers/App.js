import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Sonder from "../Components/Pages/Projects/Sonder/Sonder";
import Footer from "../Components/Footer/Footer";
import StickyNavHeader from "../Components/UI/StickyNavHeader/StickyNavHeader";
import StickyContact from "../Components/UI/StickyContact/StickyContact";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/projects/Sonder" component={Sonder} />
      <StickyNavHeader />
      <StickyContact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
