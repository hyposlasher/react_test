import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactRedux from 'react-redux'

import Layout from "./components/Layout"

const app = document.getElementById('app');

ReactDOM.render( <Layout />, app)
