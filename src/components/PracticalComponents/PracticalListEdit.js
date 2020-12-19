import React, { Component } from "react";
import { format } from "date-fns";

class PracticalListEdit extends Component {
  render() {
    return (
      <div id="practical-sub-edit-container" className="list-container" data-key={this.props.propKey}>
        <form action="">
          <label htmlFor="company-name">Company Name</label>
          <input type="text" id="company-name" name="company-name" defaultValue={this.props.state.companyName}/>
          
          <label htmlFor="job-title">Job Title</label>
          <input type="text" id="job-title" name="job-title" defaultValue={this.props.state.jobTitle}/>

          <label htmlFor="start-date">Start date</label>
          <input type="date" id="start-date" name="start-date" defaultValue={format(this.props.state.startDate, 'yyyy-MM-dd')} required/>

          <label htmlFor="end-date">End date</label>
          <input type="date" id="end-date" name="end-date"  defaultValue={format(this.props.state.endDate, 'yyyy-MM-dd')} required/>

          <label htmlFor="tasks">Main job tasks</label>
          <textarea type="text" id="tasks" name="tasks" defaultValue={parseTasksToString(this.props.state.tasks)} placeholder="Comma separate tasks ie: task1,task2,task3"/>

          <button type="submit" value="Submit" onClick={this.props.toggleEditCard} >
            Edit Done
          </button>
        </form>
      </div>
    );
  }
}

const parseTasksToString = tasks => {
  return tasks.join();
}

export default PracticalListEdit;