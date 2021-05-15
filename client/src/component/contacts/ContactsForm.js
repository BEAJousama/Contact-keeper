import React, {useState, useContext, useEffect} from 'react'
import ContactContext from "../context/contact/contactContext"
import {Form, Button} from "react-bootstrap/"

const ContactsForm = () => {
const contactContext  = useContext(ContactContext);

const [contact, setContact] = useState({
        name:'',
        email:'',
        phone : '',
        type : 'personal'
    });
const {name,email,phone,type} = contact;
const {addContact, current, editContact, clearcurrent} = contactContext

useEffect(() => {
    if (current !== null){
      setContact(current);
    }
}, [contactContext, current])

const onChange = e => setContact({...contact, [e.target.name]: e.target.value});
const clearall = () => {
    clearcurrent();
    setContact({
        name:'',
        email:'',
        phone : '',
        type : 'personal',
        _id:''
    })
}
const onSubmit = e =>{
    e.preventDefault();
    current === null ? addContact(contact) : editContact(contact); 
    setContact({
        name:'',
        email:'',
        phone : '',
        type : 'personal'
    })
}
    return (
        <>
        <Form onSubmit={onSubmit}>
            <h2 className="text-primary">{current === null ? "Add Contact" : "edit contact"}</h2>
            <Form.Group controlId="formBasicEmail">
            <Form.Control
                required
                type="text"
                placeholder="name"
                name="name"
                value={name}
                onChange = {onChange}
                />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Control
                required
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange = {onChange}
                />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Control
                type="text"
                placeholder="phone"
                name="phone"
                value={phone}
                onChange = {onChange}
                />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Check
                inline
                label="Personal" 
                type="radio"
                name="type"
                value="personal"
                checked = { type === 'personal' }
                onChange = {onChange}
                />
                <Form.Check
                inline
                label="Professional" 
                type="radio"
                name="type"
                value="professional"
                checked = { type === 'professional' }
                onChange = {onChange}
                />
                </Form.Group>


                <Button className="my-1 btn-block" variant="dark" type="submit" > {current === null ?"Add Contact" : "edit contact"}  </Button>
        </Form>
        
        {
            current !== null && <Button type="submit" className="btn btn-light btn-block my-5" onClick ={clearall}>Clear All</Button>

        }
        </>
    )
}

export default ContactsForm
