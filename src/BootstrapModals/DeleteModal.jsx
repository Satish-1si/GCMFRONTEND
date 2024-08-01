import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DeleteModal = ({ show, onHide, message }) => {
  return (
    <Modal
      size="md"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-md"
    >
      <Modal.Header closeButton className='p-2'>
        <Modal.Title id="example-modal-sizes-title-sm">
          Delete Confirmation
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className='p-5'>{message}</Modal.Body>

      <Modal.Footer className='p-0'>
        <Button variant="secondary" onClick={()=>onHide()}>Cancel </Button>
        <Button variant="danger" onClick={() => onHide()}> Delete </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
