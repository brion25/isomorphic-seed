import React from "react";
import {Route} from "react-router";
import Home from "./components/home";
import About from "./components/about";
import Details from "./components/details";

export default (
  <Route path="/" component={Home}>
    <Route path="about" component={About} />
    <Route path="details" component={Details} />
  </Route>
)
