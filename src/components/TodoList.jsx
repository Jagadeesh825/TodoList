import CreateTask from '../models/createTask';
import React, { useState, useEffect } from 'react';
import Card from '../models/Card';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem('taskList');

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskobj) => {
    let tempList = [...taskList];
    tempList.push(taskobj);
    setTaskList(tempList);
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setModal(false);
  };

  const deleteTask = (index) => {
    let tempList = [...taskList];
    tempList.splice(index, 1);
    setTaskList(tempList);
    localStorage.setItem('taskList', JSON.stringify(tempList));
  };

  const updateListArray = (updatedObj, index) => {
    let tempList = [...taskList];
    tempList[index] = updatedObj;
    setTaskList(tempList);
    localStorage.setItem('taskList', JSON.stringify(tempList));
  };

  return (
    <>
    <div className='bg'>
      <div name="header" className='header text-center '>
        <h1>Todo List</h1>
        <button onClick={toggle}>Create Task</button>
      </div>
      <div className='task-container'>
        {taskList && taskList.map((obj, index) => (
          <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
      </div>
    </>
  );
};

export default TodoList;
