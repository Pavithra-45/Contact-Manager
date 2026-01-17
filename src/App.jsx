import React, { useEffect, useState } from 'react'
import {v4 as uuid} from "uuid";
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from './components/ContactList'

const LOCAL_STORAGE_KEY = "contacts";

function App() {
const [contacts, setContacts] = useState(() => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
});


const addContactHandler = (contact)=>{
  console.log(contact);
  setContacts([...contacts,{ id:uuid(),...contact}])
}

const removeContactHandler = (id)=>{
  const newContactList = contacts.filter((contact)=>{
    return contact.id !== id;
  });
  setContacts(newContactList);
}

useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
}, [contacts]);

useEffect(()=>{
  const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retrievedContacts) setContacts(retrievedContacts);
}, []);

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  )
}

export default App