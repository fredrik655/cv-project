import React from "react";


const EducationEdit = props => {
  return (
    <div id="Education-container" className="info-container">
      <form action="">
        <label htmlFor="school-name">School name</label>
        <input type="text" id="school-name" name="school-name" />

        <label htmlFor="study-title">Title of study</label>
        <input type="text" id="study-title" name="study-title" />

        <label htmlFor="start-date">Start date</label>
        <input type="date" id="start-date" name="start-date" required/>

        <label htmlFor="end-date">End date</label>
        <input type="date" id="end-date" name="end-date" required/>

        <button type="submit" value="Submit" onClick={props.toggleEdit}>
          Edit Done
        </button>
      </form>
    </div>
  );
}

export default EducationEdit;
