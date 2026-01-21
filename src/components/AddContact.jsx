import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact({ addContactHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("All the fields are required");
      return;
    }

    // send data to App.jsx
    addContactHandler({ name, email });

    // clear form
    setName("");
    setEmail("");

    // redirect to home
    navigate("/");
  };

  return (
    <div className="ui main container">
      <h2 className="ui dividing header">Add Contact</h2>

      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
