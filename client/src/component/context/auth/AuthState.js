import React, {useReducer} from 'react'
import axios from "axios";
import authContext from "./authContext"
import authReducer from './authReducer'

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

 
 const AuthState = (props) => {
     const initialState = {
       token: localStorage.getItem('token'),
       user:null,
       isAuthenticated : null,
       loading : true,
       error:null
     }
     const [state,dispatch]=useReducer(authReducer,initialState);
//Load User


//Register User


//Login User


//Logout


//Clear Errors
   return (
     <authContext.Provider
     value= {{
        token : state.token,
        user : state.user,
        isAuthenticated:state.isAuthenticated,
        loading:state.loading,
        error:state.error,
    
    }}
     >
       {props.children}
     </authContext.Provider>
   )
 }
 
 export default AuthState; 
 