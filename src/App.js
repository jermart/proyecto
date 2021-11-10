import React, { Component } from "react";
import Banner from "./components/Banner";
import Explanation from "./components/Explanation";
import Presentation from "./components/Presentation";
import Stickyfooter from "./componets/Stickyfooter";
import Leyaut from "./components/Leyaut";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Leyaut>
    <Banner/>
    <Explanation/>
    <Presentation/>
    <Stickyfooter/>
    </Leyaut>
  );
}

export default App;
