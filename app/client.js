import React from "react";
import {render} from "react-dom";
import Routes from "./routes";
import {Router, Route} from "react-router";
import {createHistory} from "history";

const element = document.getElementById('main-content'),
    history = createHistory();

render(
  <Router history={history} onChange={function(){console.log('change!')}}>
    {Routes}
  </Router>
  ,element
);
