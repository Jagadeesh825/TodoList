import React, { useState } from 'react';
import EditTask from './EditTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    { primaryColor: "#3498db", secondaryColor: "#ecf0f1" }, // Blue
  { primaryColor: "#e74c3c", secondaryColor: "#f9ebae" }, // Red
  { primaryColor: "#2ecc71", secondaryColor: "#e6f7ec" }, // Green
  { primaryColor: "#f39c12", secondaryColor: "#fdf2e9" }, // Orange
  { primaryColor: "#9b59b6", secondaryColor: "#f3eefb" }  // Purple
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (updatedObj) => {
    updateListArray(updatedObj, index);
    setModal(false);
  };

  const handleDelete = () => {
    deleteTask(index);
    setModal(false);
  };

  return (
    <div className="card-wrapper mr-5" style={{ backgroundColor: '#122636', boxShadow: '0px 2px 30px #01040b', borderRadius: '10px', color: '#fff' }}>
      <div className="card-top" style={{ backgroundColor: colors[index % 5].primaryColor }}></div>
      <div className="task-holder">
        <span className="card-header" style={{ background: 'linear-gradient(to right, #09142a, #0a1b64)', borderRadius: '10px' }}>{taskObj.Name}</span>
        <p className="mt-3">{taskObj.Description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <FontAwesomeIcon icon={faEdit} style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={() => toggle()} />
          <FontAwesomeIcon icon={faTrash} style={{ color: colors[index % 5].primaryColor, cursor: "pointer", marginLeft: "10px" }} onClick={() => handleDelete()} />
        </div>
      </div>
      <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
    </div>
  );
};

export default Card;