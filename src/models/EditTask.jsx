import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [updatedName, setUpdatedName] = useState(taskObj.Name);
  const [updatedDescription, setUpdatedDescription] = useState(taskObj.Description);

  const handleSave = () => {
    const updatedObj = {
      ...taskObj,
      Name: updatedName,
      Description: updatedDescription
    };
    updateTask(updatedObj);
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
     <ModalHeader toggle={toggle} style={{ background: 'linear-gradient(to right, #091325, #131a3c)', color: 'white' }}>Edit Task</ModalHeader>
      <ModalBody style={{ background: '#091325', color: 'white' }}>
        <form>
          <div className='form-group'>
            <label>Task Name</label>
            <input type="text" className='form-control' value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
          </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea rows="5" className='form-control' value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)}></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter style={{ background: '#122636'}}>
        <Button color="primary" onClick={handleSave}>
          Save Changes
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
