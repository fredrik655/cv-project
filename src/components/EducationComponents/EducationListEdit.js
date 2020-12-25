import React from "react";
import { format } from "date-fns";

const EducationListEdit = props => {
  return (
    <div id="education-sub-edit-container" className="info-container" data-key={props.propKey}>
      <form action="">
        <label htmlFor="school-name">School name</label>
        <input type="text" id="school-name" name="school-name" defaultValue={props.state.schoolName}/>
        

        <label htmlFor="study-title">Title of study</label>
        <input type="text" id="study-title" name="study-title" defaultValue={props.state.majorName}/>

        <label htmlFor="start-date">Start date</label>
        <input type="date" id="start-date" name="start-date"  defaultValue={format(props.state.startDate, 'yyyy-MM-dd')} required/>

        <label htmlFor="end-date">End date</label>
        <input type="date" id="end-date" name="end-date"  defaultValue={format(props.state.endDate, 'yyyy-MM-dd')}  required/>

        <button type="submit" value="Submit" onClick={props.toggleEditCard}>
          Edit Done
        </button>
      </form>
    </div>
  );
}


export default EducationListEdit;