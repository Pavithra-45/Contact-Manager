import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditContact({ updateContactHandler, contacts }) {
  const { id } = useParams();              // get id from URL
  const navigate = useNavigate();

  // find the contact to edit
  const contact = contacts.find(
    (c) => c.id === id
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // pre-fill form
  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
    }
  }, [contact]);

  const update = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("All the fields are required");
      return;
    }

    // send exactly what updateContactHandler expects
    updateContactHandler({
      id,          // 🔑 mandatory
      name,
      email,
    });

    navigate("/");
  };

  return (
    <div className="ui main container">
      <h2 className="ui dividing header">Edit Contact</h2>

      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
}

export default EditContact;
