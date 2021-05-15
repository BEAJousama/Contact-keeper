import React, {useReducer} from 'react'
import {nanoid} from "nanoid"
import alertContext from "../alert/alertContext"
import alertReducer from '../alert/alertReducer'

import { 
 SET_ALERT ,
 REMOVE_ALERT ,
 } from "../types"

 
 const AlertState = (props) => {
     const initialState = [];
     const [state,dispatch] = useReducer(alertReducer,initialState);
//setalert
const setAlert = (msg,type)=>{
    const id = nanoid(); 
    dispatch({type:SET_ALERT, payload:{msg,type,id}});
    setTimeout(()=>
        dispatch({type:REMOVE_ALERT, payload:id}),5000
    );
}


   return (
     <alertContext.Provider
     value= {{
         alerts:state,
         setAlert
    }}
     >
       {props.children}
     </alertContext.Provider>
   )
 }
 
 export default AlertState; 
 