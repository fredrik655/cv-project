import React from "react";


const PracticalEdit = props => {
  return (
    <div id="practical-container" className="info-container">
      <form action="">
        <label htmlFor="company-name">Company Name</label>
        <input type="text" id="company-name" name="company-name" />

        <label htmlFor="job-title">Job Title</label>
        <input type="text" id="job-title" name="job-title" />

        <label htmlFor="start-date">Start date</label>
        <input type="date" id="start-date" name="start-date" required/>

        <label htmlFor="end-date">End date</label>
        <input type="date" id="end-date" name="end-date" required/>

        <label htmlFor="tasks">Main job tasks</label>
        <textarea type="text" id="tasks" name="tasks" placeholder="Comma separate tasks ie: task1,task2,task3"/>

        <button type="submit" value="Submit" onClick={props.toggleEdit} >
          Edit Done
        </button>
      </form>
    </div>
  );
}

export default PracticalEdit;
