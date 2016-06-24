import { combineReducers } from 'redux'
import { ADD_CONTACT, SEARCH_FILTER } from '../actions/actions'

var noPic = "http://vision-vitamins.narod.ru/images/27/1-23777.jpg"

export const phoneBookApp = function(state, action) {
    switch(action.type){
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    {
                        ...action.payload,
                        image: noPic,
                        id: state.contacts.length + 1
                    }
                ]
            }
        default:
            return state
    }
}
