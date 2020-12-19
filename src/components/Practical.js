import React, { Component } from "react";
import PracticalList from './PracticalComponents/PracticalList';
import uniqid from 'uniqid';
import PracticalEdit from "./PracticalComponents/PracticalEdit";

class Practical extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
      ],
      add: false,
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleEditCard = this.toggleEditCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  deleteCard(ev) {
    const eventKey = ev.target.parentNode.getAttribute('data-key');
    this.setState(state => {
      const list = [...state.list];
      let index = 0;
      list.forEach((element, i) => {
        if(element.id === eventKey){
          index = i;
        }
      });
      list.splice(index, 1);
      return {list: list, add: false};
    })
  }

  toggleEdit(ev) {
    ev.preventDefault();
    if (ev.target.value === "Submit") {
      const siblings = ev.target.parentNode.querySelectorAll("input");
      const textArea = ev.target.parentNode.querySelector('textarea');
      if (siblings[2].validity.valid && siblings[3].validity.valid) {
        this.setState((state) => {
          const tempArr = [...state.list];
          tempArr.push({
            id: uniqid(),
            companyName: siblings[0].value,
            jobTitle: siblings[1].value,
            startDate: siblings[2].valueAsDate,
            endDate: siblings[3].valueAsDate,
            tasks: parseTaskInput(textArea.value),
            edit: false,
          });
          return { list: tempArr, add: false };
        });
      }
    } else {
      this.setState({ add: true });
    }
  }

  toggleEditCard(ev) {
    ev.preventDefault();
    if(ev.target.value !== 'Submit'){
      const eventKey = ev.target.parentNode.getAttribute('data-key');
      this.setState(state => {
        const tempArr = [...state.list];
        tempArr.forEach(element => {
          if(element.id === eventKey){
            element.edit = true;
          }
        });
        return {list: tempArr, add: false};
      });
    }
    else {
      this.setState(state => {
        const eventKey = ev.target.parentNode.parentNode.getAttribute('data-key');
        const inputs = ev.target.parentNode.querySelectorAll('input');
        const textArea = ev.target.parentNode.querySelector('textarea');
        if(inputs[2].validity.valid && inputs[3].validity.valid){
          const tempArr = [...state.list];
          tempArr.forEach(element => {
            if(element.id === eventKey){
              element.companyName = inputs[0].value;
              element.jobTitle = inputs[1].value;
              element.startDate = inputs[2].valueAsDate;
              element.endDate = inputs[3].valueAsDate;
              element.tasks = parseTaskInput(textArea.value);
              element.edit = false;
            }
          });
          return {list: tempArr, add: false};
        }
        
      });
    }
    
  }

  render() {
    console.log(this.state);
    return renderFunc(this.state, this.toggleEdit, this.toggleEditCard, this.deleteCard);
  }
  
}

const renderFunc = (state, toggleEdit, toggleEditCard, deleteCard) => {
  if(state.add === false){
    return (
      <div id="practical-container" className="info-container">
        <h2>Previous Jobs</h2>
        {returnJsxList(state.list, toggleEditCard, deleteCard)}
        <button onClick={toggleEdit}>Add new</button>
      </div>
    );
  }
  else {
    return <PracticalEdit toggleEdit={toggleEdit}/>;
  }
};

const parseTaskInput = input => {
  if(input !== ''){
    return input.split(',');
  }
  else {
    return [];
  }
}

const returnJsxList = (list, toggleEditCard, deleteCard) => {
  return list.map((element) => {
    return (
      <PracticalList
        key={uniqid()}
        state={element}
        toggleEditCard={toggleEditCard}
        deleteCard={deleteCard}
      />
    );
  });
};

export default Practical;
