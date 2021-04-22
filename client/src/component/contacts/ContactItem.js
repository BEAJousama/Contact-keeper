import React , {useContext} from 'react'
import ContactContext from "../context/contact/contactContext"
import {Button, Card} from "react-bootstrap";
const ContactItem = ({contact}) => {
  const contactContext  = useContext(ContactContext);

  const onDelete = () =>{
    contactContext.deleteContact(contact.id);
  }
  const setCurrent = () =>{
    contactContext.setcurrent(contact);
  }
  return (
    <>
      <Card>
        <h3 className="text-primary text-left">{contact.name}{'  '}          
          <span style={{float:"right"}} className={"badge "+ (contact.type === "professional" ? "badge-success" : "badge-primary")}>{contact.type.charAt(0).toUpperCase()+contact.type.slice(1)}</span>
        </h3>
    <ul>
        {contact.phone && (<li><i className="fas fa-envelope-open"></i>   {contact.phone}</li> )}
        {contact.email && <li> <i className="fas fa-phone"></i>   {contact.email} </li> }
    </ul>
    
    <Button className="my-3 " variant="warning" size="sm" onClick={setCurrent}>Update</Button>
    <Button variant="danger" size="sm" onClick={onDelete}>Delete</Button>
      </Card>
    </>
  )
}

export default ContactItem
