import React, {useReducer} from 'react'
import axios from "axios";
import authContext from "./authContext"
import authReducer from './authReducer'
import setAuthToken from "../../../util/setAuthToken"
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
const loaduser = async ()=>{
if(localStorage.token){
  setAuthToken(localStorage.token);
}
  try {
    const res =await axios.get('/api/auth');
    dispatch({type: USER_LOADED, payload:res.data})
    
  } catch (err) {
    dispatch({type:AUTH_ERROR, payload: err.response.data.msg});
    
  }

}

//Register User
const register = async FormData =>{
  const config ={
    headers:{
      'Content-Type' : "application/json"
    }
  }
  try{
    const res = await axios.post("/api/users", FormData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      loaduser() 
  }catch(err){
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg
    });
  }
}

//Login User
const login = async FormData =>{
  const config ={
    headers:{
      'Content-Type' : "application/json"
    }
  }
  try{
    const res = await axios.post("/api/auth", FormData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      loaduser() 
  }catch(err){
    dispatch({
      type: LOGIN_FAIL,
    });
  }
}

//Logout
const logout = ()=>{
  dispatch({type:LOGOUT});
}

//Clear Errors

const clearErrors = ()=>{
  dispatch({type:CLEAR_ERRORS})
}
   return (
     <authContext.Provider
     value= {{
        token : state.token,
        user : state.user,
        isAuthenticated:state.isAuthenticated,
        loading:state.loading,
        error:state.error,
        loaduser,
        login,
        register,
        clearErrors,
        logout
    
    }}
     >
       {props.children}
     </authContext.Provider>
   )
 }
 
 export default AuthState; 
 