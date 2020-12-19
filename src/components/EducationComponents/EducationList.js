import React, { Component } from "react";
import { format } from "date-fns";
import EducationListEdit from "./EducationListEdit";

class EducationList extends Component {
  render() {
    return renderFunc(
      this.props.state,
      this.props.toggleEditCard,
      this.props.deleteCard,
    );
  }
}

const renderFunc = (state, toggleEditCard, deleteCard) => {
  if (state.edit === false) {
    return (
      <div id="education-sub-container" className="list-container" data-key={state.id}>
        <h2>School name: {state.schoolName}</h2>
        <h2>Title of study: {state.majorName}</h2>
        <h2>Start date: {format(state.startDate, "MM/dd/yyyy")}</h2>
        <h2>End date: {format(state.endDate, "MM/dd/yyyy")}</h2>
        <button onClick={toggleEditCard}>Edit</button>
        <button onClick={deleteCard}>Delete</button>
      </div>
    );
  } else {
    return <EducationListEdit state={state} toggleEditCard={toggleEditCard} propKey={state.id}/>;
  }
};

export default EducationList;
