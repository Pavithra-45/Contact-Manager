import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import api from "./api/contacts"
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import EditContact from "./components/EditContact";

const LOCAL_STORAGE_KEY = "contacts";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  //retrieve contacts
  const retrieveContacts = async()=>{
    const response =  await api.get('/contacts');
    return response.data;
  };
  

  const addContactHandler = async (contact) => {
  try {
    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/contacts", request);

    setContacts([...contacts, response.data]);
  } catch (error) {
    console.error("Error adding contact:", error);
  }
};


  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const updateContactHandler = async (contact) => {
  const response = await api.put(`/contacts/${contact.id}`, contact);

  setContacts(
    contacts.map((c) =>
      c.id === contact.id ? response.data : c
    )
  );
};

  useEffect(() => 
    {
    // const retrievedContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY),
    // );
    // if (retrievedContacts) setContacts(retrievedContacts);
    const getAllContacts = async()=>{
      const allContacts = await retrieveContacts();
      if (allContacts)setContacts(allContacts);
    };
    getAllContacts();
  }, []);

   useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />

        <Routes>
        <Route path = "/" element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>}/>
        <Route path = "/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
        <Route path = "/contact/:id" element={<ContactDetails contacts={contacts} />}/>
        <Route path = "/edit/:id" element={<EditContact updateContactHandler={updateContactHandler} contacts={contacts} />}/>
        {/* <AddContact addContactHandler={addContactHandler } /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
        
        </Routes>

      </Router>
    </div>
  );
}

export default App
