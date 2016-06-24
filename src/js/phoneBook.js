import React from "react";
import ReactDOM from "react-dom";
import { Provider }from 'react-redux'
import { combineReducers, createStore } from 'redux'
import Layout from "./components/Layout"
import {phoneBookApp} from "./reducers/reducers"
import { addContact, searchFilter } from './actions/actions'

const initialState = {
    contacts: [
        {
            id: 1,
            name: 'Darth Vader',
            phoneNumber: '+250966666666',
            image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
        }, {
            id: 2,
            name: 'Princess Leia',
            phoneNumber: '+250966344466',
            image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif'
        }, {
            id: 3,
            name: 'Luke Skywalker',
            phoneNumber: '+250976654433',
            image: 'http://s3-ec.buzzfed.com/static/enhanced/webdr01/2013/5/3/15/anigif_enhanced-buzz-13518-1367608452-4.gif '
        }, {
            id: 4,
            name: 'Chewbacca',
            phoneNumber: '+250456784935',
            image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
        }
    ]
}




const app = document.getElementById('app');
let store = createStore(phoneBookApp, initialState)
console.log(store.getState())
store.dispatch(addContact("Denis", "+65156415"))
store.dispatch(addContact("sdfsf", "+sdfdsf"))
store.dispatch(addContact("sdf", "+651564sdfsd15"))
store.dispatch(addContact("Dsdfsdfsdfenis", "+651sdfs56415"))
console.log(store.getState())


// ReactDOM.render( <Layout />, app)
