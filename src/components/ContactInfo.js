import React, { Component } from "react";
import ContactInfoEdit from "./ContactInfoEdit";

class ContactInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      edit: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(ev) {
    ev.preventDefault();
    console.log(ev.target.parentNode.querySelectorAll("input"));
    if (ev.target.value === "Submit") {
      const siblings = ev.target.parentNode.querySelectorAll("input");
      console.table(siblings[1].validity);
      if (siblings[2].validity.valid && siblings[1].validity.valid) {
        this.setState({
          name: siblings[0].value,
          email: siblings[1].value,
          phone: siblings[2].value,
          edit: false,
        });
      }
    } else {
      this.setState({ edit: true });
    }
  }

  render() {
    return renderFunc(this.state, this.toggleEdit);
  }
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
