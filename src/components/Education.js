import React, { Component } from "react";
import EducationList from "./EducationComponents/EducationList";
import EducationEdit from "./EducationComponents/EducationEdit";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        
      ],
      add: false,
    };

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
      if (siblings[2].validity.valid && siblings[3].validity.valid) {
        this.setState((state) => {
          const tempArr = [...state.list];
          tempArr.push({
            id: uniqid(),
            schoolName: siblings[0].value,
            majorName: siblings[1].value,
            startDate: siblings[2].valueAsDate,
            endDate: siblings[3].valueAsDate,
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
        if(inputs[2].validity.valid && inputs[3].validity.valid){
          const tempArr = [...state.list];
          tempArr.forEach(element => {
            if(element.id === eventKey){
              element.schoolName = inputs[0].value;
              element.majorName = inputs[1].value;
              element.startDate = inputs[2].valueAsDate;
              element.endDate = inputs[3].valueAsDate;
              element.edit = false;
            }
          });
          return {list: tempArr, add: false};
        }
        
      });
    }
    
  }

  render() {
    return renderFunc(this.state, this.toggleEdit, this.toggleEditCard, this.deleteCard);
  }
}

const renderFunc = (state, toggleEdit, toggleEditCard, deleteCard) => {
  if (state.add === false) {
    return (
      <div id="education-container" className="info-container">
        <h2>Education</h2>
        {returnJsxList(state.list, toggleEditCard, deleteCard)}
        <button onClick={toggleEdit}>Add new</button>
      </div>
    );
  } else {
    return (
      <EducationEdit toggleEdit={toggleEdit} toggleEditCard={toggleEditCard} />
    );
  }
};

const returnJsxList = (list, toggleEditCard, deleteCard) => {
  return list.map((element) => {
    return (
      <EducationList
        key={uniqid()}
        state={element}
        toggleEditCard={toggleEditCard}
        deleteCard={deleteCard}
      />
    );
  });
};

export default Education;
