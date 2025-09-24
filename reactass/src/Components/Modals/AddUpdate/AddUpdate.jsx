import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddUpdate({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Body>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddUpdate;