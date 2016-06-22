import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactRedux from 'react-redux'

import Layout from "./components/Layout"

//
// class App extends React.Component {
//   render() {
//     return <div>Привет из App, { this.props.user }!</div>
//   }
// }
//
//
// const initialState = {
//   name: 'Василий',
//   surname: 'Реактов',
//   age: 27
// }
//
// function mapStateToProps (state) {
//   return {
//     user: state.user
//   }
// }
//
// function userstate(state = initialState) {
//   return state;
// }
//
// function configureStore(initialState) {
//   const store = createStore(rootReducer, initialState)
//   return store
// }

const app = document.getElementById('app');

// const store = configureStore()

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   app
// )

ReactDOM.render( <Layout />, app)
