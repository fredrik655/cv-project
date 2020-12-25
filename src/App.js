import React from "react";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Practical from "./components/Practical";


const App = () => {
  return (
    <div id="cv-container">
      <h1>CV Builder</h1>
      <ContactInfo />
      <Education />
      <Practical />
    </div>
  );
}

export default App;
