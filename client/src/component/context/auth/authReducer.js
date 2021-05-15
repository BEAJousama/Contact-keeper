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
const authReducer = (state, action) => {
   
    switch (action.type){
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:action.payload
            }
        case REGISTER_SUCCESS :
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated : true,
                loading: false, 
            };
            case LOGIN_SUCCESS :
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated : true,
                loading: false, 
            };
        case REGISTER_FAIL : 
        case AUTH_ERROR:
        case LOGIN_FAIL:
            case LOGOUT: 

            localStorage.removeItem('token'); 
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                user:null,
                error:action.payload,
            };
            case CLEAR_ERRORS:{
               return{
                   ...state,
                   error:null 
               }  
            }
       
        default:
            return null;
    }
}

export default authReducer