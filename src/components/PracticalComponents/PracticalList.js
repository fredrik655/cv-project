import React, { Component } from "react";
import { format, formatDistance } from "date-fns";
import PracticalListEdit from './PracticalListEdit';
import uniqid from 'uniqid';

class PracticalList extends Component {
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
      <div id="practical-sub-container" className="list-container" data-key={state.id}>
        <h2>Company Name: {state.companyName}</h2>
        <h2>Job Title: {state.jobTitle}</h2>
        <h2>Start date: {format(state.startDate, 'dd-MM-yyyy')}</h2>
        <h2>End date: {format(state.endDate, 'dd-MM-yyyy')}</h2>
        <h2>Work duration: {formatDistance(state.startDate, state.endDate)}</h2>
        {generateFullList(state.tasks)}
        <button onClick={toggleEditCard}>Edit</button>
        <button onClick={deleteCard}>Delete</button>
      </div>
    );
  } 
  else {
    return <PracticalListEdit state={state} toggleEditCard={toggleEditCard} propKey={state.id}/>;
  }
};

const generateFullList = tasks => {
  if(tasks.length > 0){
    return (
      <ul>
        Work tasks:
        {generateTaskList(tasks)}
      </ul>
    );
  }
}

const generateTaskList = tasks => {
  return tasks.map(e => {
    return <li key={uniqid()}>{e}</li>;
  })
}

export default PracticalList;