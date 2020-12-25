import React from "react";

const ContactInfoEdit = props => {
  return (
    <div id="contact-container" className="info-container">
      <form action="">
        <label htmlFor="name-contact">Full name</label>
        <input type="text" id="name-contact" name="name-contact" />

        <label htmlFor="email-contact">Email address</label>
        <input type="email" id="email-contact" name="email-contact" />

        <label htmlFor="phone-contact">Phone number ***-*****</label>
        <input
          type="tel"
          id="phone-contact"
          name="phone-contact"
          pattern="[0-9]{3}-[0-9]{5}"
        />

        <button type="submit" value="Submit" onClick={props.toggleFunc}>
          Edit Done
        </button>
      </form>
    </div>
  );
}


export default ContactInfoEdit;
