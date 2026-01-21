import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom';

function ContactList(props) {
    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    }
   
    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler = {deleteContactHandler}>
            </ContactCard>
        )
    })
  return (
    <div className='main' style={{ marginTop: "80px" }}>
        <div className='link'>
        <h2>Contact List</h2>
        <Link to="/add"><button className='ui button blue '>Go to Add contact</button>
        </Link>
        </div>
        <div className='ui celled list'>
            {renderContactList}
        </div>
    </div>
    
  )
}

export default ContactList