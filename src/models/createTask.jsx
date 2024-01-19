import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({ modal, toggle, save }) => {
  const [taskname, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'taskName') {
      setTaskName(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  const handleSave = () => {
    let taskobj = {
      Name: taskname,
      Description: description,
    };
    save(taskobj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle} className="custom-modal">
     <ModalHeader toggle={toggle} style={{ background: 'linear-gradient(to right, #091325, #131a3c)', color: 'white' }}>Create Task</ModalHeader>

      <ModalBody style={{ background: '#091325', color: 'white' }}>
        <form>
          <div className='form-group'>
            <label style={{ color: 'white' }}>Task Name</label>
            <input
              type="text"
              className='form-control'
              value={taskname}
              onChange={handleChange}
              name="taskName"
              placeholder="Enter Task Name"
              style={{
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                width: '100%',
                marginBlock: '5px',
              }}
            />
          </div>
          <div className='form-group'>
            <label style={{ color: 'white' }}>Description</label>
            <textarea
              rows="5"
              className='form-control'
              value={description}
              onChange={handleChange}
              name="description"
              placeholder='Type here...'
              style={{
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                width: '100%',
                marginBlock: '5px',
              }}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter style={{ background: '#122636' }}>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
