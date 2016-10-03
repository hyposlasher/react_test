import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import { Provider } from 'react-redux'

import Layout from "./components/Layout"
import reducer from "./redux/reducers"

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
const app = document.getElementById('app');


ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  app)
