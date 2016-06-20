import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout"

const app = document.getElementById('app');

<<<<<<< HEAD
ReactDOM.render(<Layout />, app)
=======
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      
    </Route>
  </Router>,
app)
>>>>>>> e7a24cbcf2d18d531b7cce54be1ecce4de85ecc3
