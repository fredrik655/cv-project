import React from "react";
import { format } from "date-fns";



const PracticalListEdit = (props) => {
  return (
    <div id="practical-sub-edit-container" className="list-container" data-key={props.propKey}>
      <form action="">
        <label htmlFor="company-name">Company Name</label>
        <input type="text" id="company-name" name="company-name" defaultValue={props.state.companyName}/>
        
        <label htmlFor="job-title">Job Title</label>
        <input type="text" id="job-title" name="job-title" defaultValue={props.state.jobTitle}/>

        <label htmlFor="start-date">Start date</label>
        <input type="date" id="start-date" name="start-date" defaultValue={format(props.state.startDate, 'yyyy-MM-dd')} required/>

        <label htmlFor="end-date">End date</label>
        <input type="date" id="end-date" name="end-date"  defaultValue={format(props.state.endDate, 'yyyy-MM-dd')} required/>

        <label htmlFor="tasks">Main job tasks</label>
        <textarea type="text" id="tasks" name="tasks" defaultValue={parseTasksToString(props.state.tasks)} placeholder="Comma separate tasks ie: task1,task2,task3"/>

        <button type="submit" value="Submit" onClick={props.toggleEditCard} >
          Edit Done
        </button>
      </form>
    </div>
  );
}

const parseTasksToString = tasks => {
  return tasks.join();
}

export default PracticalListEdit;