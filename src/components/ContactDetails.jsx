import React from 'react'
import { Link, useParams } from 'react-router-dom'
import user from '../images/user-pavi.png'


function ContactDetails({contacts}) {
    const {id} = useParams();

    const contact = contacts.find(
    (contact) => contact.id === id
  );

  if (!contact) {
    return <h3 className="ui center aligned">Contact not found</h3>;
  }

  const { name, email } = contact;

  return (
    <div className='main'>
        <h2 className="ui center aligned header" style={{ marginTop: "80px" }}>Contact Details</h2>
        <div className='ui card centered'>
            <div className='image'>
                <img src={user} alt="user" />
            </div>
            <div className='content'>
                <div className='header'>{name}</div>
                <div className='description'>{email}</div>
            </div>
        </div>
            <div className="ui basic center aligned segment">
                <Link to="/">
                <button className='ui button blue center'> Back to Contact List</button>
                </Link>
            </div>
    </div>
  )
}

export default ContactDetails;