import React, { useState } from "react";
import PracticalList from './PracticalComponents/PracticalList';
import uniqid from 'uniqid';
import PracticalEdit from "./PracticalComponents/PracticalEdit";

const Practical = () => {
  const [stateList, setStateList] = useState([]);
  const [add, setAdd] = useState(false);

  const deleteCard = ev => {
    const eventKey = ev.target.parentNode.getAttribute('data-key');
    const list = [...stateList];
    let index = 0;

    list.forEach((element, i) => {
      if(element.id === eventKey){
        index = i;
      }
    });

    list.splice(index, 1);
    setStateList(list);
    setAdd(false); 
  }

  const toggleEdit = ev => {
    ev.preventDefault();
    if (ev.target.value === "Submit") {
      const siblings = ev.target.parentNode.querySelectorAll("input");
      const textArea = ev.target.parentNode.querySelector('textarea');
      if (siblings[2].validity.valid && siblings[3].validity.valid) {
        const tempArr = [...stateList];
        tempArr.push({
          id: uniqid(),
          companyName: siblings[0].value,
          jobTitle: siblings[1].value,
          startDate: siblings[2].valueAsDate,
          endDate: siblings[3].valueAsDate,
          tasks: parseTaskInput(textArea.value),
          edit: false,
        });
        setStateList(tempArr);
        setAdd(false);
      }
    } else {
      setAdd(true);
    }
  }

  const toggleEditCard = ev => {
    ev.preventDefault();
    if(ev.target.value !== 'Submit'){
      const eventKey = ev.target.parentNode.getAttribute('data-key');
        const tempArr = [...stateList];
        tempArr.forEach(element => {
          if(element.id === eventKey){
            element.edit = true;
          }
        });
        setStateList(tempArr);
        setAdd(false)
      }
    else {
        const eventKey = ev.target.parentNode.parentNode.getAttribute('data-key');
        const inputs = ev.target.parentNode.querySelectorAll('input');
        const textArea = ev.target.parentNode.querySelector('textarea');
        if(inputs[2].validity.valid && inputs[3].validity.valid){
          const tempArr = [...stateList];
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
          setStateList(tempArr);
          setAdd(false);
        }
    }
  }

  return renderFunc({list: stateList, add}, toggleEdit, toggleEditCard, deleteCard);
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
