import React, { useState } from "react";
import ContactInfoEdit from "./ContactInfoEdit";

const ContactInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [edit, setEdit] = useState(false);

  const toggleEdit = ev => {
    ev.preventDefault();
    console.log(ev.target.parentNode.querySelectorAll("input"));
    if (ev.target.value === "Submit") {
      const siblings = ev.target.parentNode.querySelectorAll("input");
      console.table(siblings[1].validity);
      if (siblings[2].validity.valid && siblings[1].validity.valid) {
        setName(siblings[0].value);
        setEmail(siblings[1].value);
        setPhone(siblings[2].value);
        setEdit(false);
      }
    } else {
      setEdit(true);
    }
  }

  return renderFunc({name, email, phone, edit}, toggleEdit);
}


const renderFunc = (state, toggleFunc) => {
  if (state.edit === false) {
    return (
      <div id="contact-container" className="info-container">
        <h2 id="contact-title">Contact Info</h2>
        <h2>Name:{state.name}</h2>
        <h2>Email:{state.email}</h2>
        <h2>Phone number:{state.phone}</h2>
        <button onClick={toggleFunc}>Edit Info</button>
      </div>
    );
  } else {
    return <ContactInfoEdit toggleFunc={toggleFunc} />;
  }
};

export default ContactInfo;
