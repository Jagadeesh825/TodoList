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
      <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
      <ModalBody>
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
      <ModalFooter>
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
