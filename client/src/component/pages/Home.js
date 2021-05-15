import React, { useContext, useEffect } from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactsForm'
import FilterContact from '../contacts/FilterContact'
import AuthContext from '../context/auth/authContext'
import ContactContext from '../context/contact/contactContext'
const Home = () => {
const authContext = useContext(AuthContext);
const contactContext = useContext(ContactContext);
useEffect(()=>{
  contactContext.getContacts()
  authContext.loaduser()
//eslint-disable-next-line
},[]) ;
  return (
    <>
      <div className="grid-2">
        <div><ContactForm/></div>
        <div><FilterContact/><Contacts/></div>
      </div>
    </>
  )
}

export default Home
