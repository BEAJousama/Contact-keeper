import React, {useReducer} from 'react'
import {nanoid} from "nanoid"
import axios from "axios";
import contactContext from "./contactContext"
import contactReducer from './contactReducer'

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

 
 const ContactState = (props) => {
     const initialState = {
        contacts:[ ],
        current : null ,
        filtered : []
     }
     const [state,dispatch]=useReducer(contactReducer,initialState);
     //Add contacts

     const addContact =  contact => {
          // const config = {
          //   headers:{
          //     "Content-Type" : "application/json"
          //   }
          // }
          // try {
            // const res = await axios.post("/api/contacts", contact , config)
            contact.id = nanoid();
            dispatch ({type : ADD_CONTACT, payload : contact });
          // } catch (error) {
          //   console.log(error)
          // }
     }

     //delete contacts
     const deleteContact = (id) =>{
        dispatch({type:DELETE_CONTACT , payload: id})
        clearcurrent();
     }
     //set current contacts
     const setcurrent = (contact) =>{
       dispatch({type:SET_CURRENT, payload : contact});
     }
     //clear current contacts
     const clearcurrent = () =>{
      dispatch({type:CLEAR_CURRENT});
    }
     //update current contacts
    const editContact = (current) => {
      dispatch({type:UPDATE_CONTACT, payload : current});
      setcurrent(null);
    }
     //filter current contacts
    const filterContact = (text)=>{
      dispatch({type:FILTER_CONTACTS, payload : text});
      console.log(state.filtered)
      console.log(text)
    }
     //clear filter contacts
     const filterClear = () =>{
       dispatch({type:CLEAR_FILTER});
     }

   return (
     <contactContext.Provider
     value= {{
       contacts : state.contacts,
       current : state.current,
       filtered : state.filtered,
       addContact,
       deleteContact,
       setcurrent,
       clearcurrent,
       editContact,
       filterContact,
       filterClear
    
    }}
     >
       {props.children}
     </contactContext.Provider>
   )
 }
 
 export default ContactState 
 