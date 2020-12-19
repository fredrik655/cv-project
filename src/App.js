import React, { Component } from "react";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Practical from "./components/Practical";

class App extends Component {
  render() {
    return (
      <div id="cv-container">
        <h1>CV Builder</h1>
        <ContactInfo />
        <Education />
        <Practical />
      </div>
    );
  }
}

export default App;
