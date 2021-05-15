import React, {useContext} from 'react'
import {CSSTransition , TransitionGroup} from 'react-transition-group'
import ContactContext from '../context/contact/contactContext'
import ContacItem from './ContactItem'
import {Figure} from "react-bootstrap"
const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const {contacts, filtered} = contactContext;
    return(
        <TransitionGroup>

         {
         filtered.length > 0 ?
         filtered.map(contact =>(
            <CSSTransition key={contact._id} timeout = {500} classNames = "item" >
                <ContacItem contact = {contact} />
            </CSSTransition>
             ))
           
           :

         contacts.map(contact =>(     
            <CSSTransition key={contact._id} timeout = {500} classNames = "item" >
                <ContacItem contact = {contact}  />
            </CSSTransition>
                 ))
         }
        </TransitionGroup>   
        )
    

}
export default Contacts;