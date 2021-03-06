import React from 'react'
import { GET_CONTACTS ,
    ADD_CONTACT,
    DELETE_CONTACT ,
    SET_CURRENT,
    CLEAR_CURRENT ,
    UPDATE_CONTACT ,
    FILTER_CONTACTS ,
    CLEAR_CONTACTS ,
    CLEAR_FILTER  ,
    CONTACT_ERROR ,
    SET_ALERT ,
    REMOVE_ALERT ,
    REGISTER_SUCCESS ,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL ,
    LOGOUT ,
    CLEAR_ERRORS } from "../types"
const contactReducer = (state, action) => {
    switch (action.type){
        case GET_CONTACTS:
            return{
                ...state,
                contacts :action.payload
            }
        case ADD_CONTACT :
            return{
                ...state,
                contacts : [...state.contacts, action.payload]
            };
        case DELETE_CONTACT : 
            return{
                ...state,
                contacts : state.contacts.filter(contact => contact._id !== action.payload )
            };
        case SET_CURRENT : 
            return{
                ...state,
                current : action.payload
            };
        case CLEAR_CURRENT : 
            return{
                ...state,
                current : null
            };
        case UPDATE_CONTACT : 
            return{
                ...state,
                contacts : state.contacts.map(contact => contact._id === action.payload._id ? action.payload : contact ),
                current:null
            };
        case FILTER_CONTACTS : 
            return{
                ...state,
                filtered : state.contacts.filter(contact => {
                    const regexp = new RegExp(`${action.payload}`, "gi");
                    return contact.name.match(regexp) || contact.email.match(regexp)
                })
            };
        case CLEAR_FILTER : 
            return{
                ...state,
                filtered : []
            };
        default:
            return null;
    }
}
export default contactReducer