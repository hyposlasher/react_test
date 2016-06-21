import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'

import Layout from "./components/Layout"

const app = document.getElementById('app');

const reducer = function(state, action) {
  switch(action.type){
    case "INC":  return state + action.payload;
    case "DEC":  return state - action.payload;
    default: return state;
  }
}

const store = createStore(reducer, 0)

store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 2})
store.dispatch({type: "INC", payload: 232})
store.dispatch({type: "INC", payload: 123})
store.dispatch({type: "DEC", payload: 5134})

ReactDOM.render(<Layout />, app)
