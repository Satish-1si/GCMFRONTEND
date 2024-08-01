import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "../sass/AddUsers.scss"

const GCMModal=({ShowModal,SetShowModal})=> {
  return (
    <>
      <Modal
        size="xl"
        show={ShowModal}
        onHide={()=>SetShowModal((bool)=>!bool)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Edit User Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className=" container row">
		<Form.Group className="col-sm-4 mb-5" >
		  <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
		  <Form.Control type="email" placeholder="Enter email" />
		</Form.Group>

		<Form.Group className="col-sm-4 mb-5" >
		  <Form.Label>User Name (Tenant)  <span className="text-danger">*</span></Form.Label>
		  <Form.Control type="text" placeholder="Enter the username" />
		</Form.Group>

		<Form.Group className="col-sm-4 mb-5">
		  <Form.Label>Mobile Number <span className="text-danger">*</span></Form.Label>
		  <Form.Control type="phonenumber" placeholder="Enter the phone number" />
		</Form.Group>

		<Form.Group className="col-sm-4 mb-5" >
		  <Form.Label>Extension <span className="text-danger">*</span></Form.Label>
		  <Form.Control type="text" placeholder="Enter the Extension number" />
		</Form.Group>
  
		<Form.Group className="col-sm-4 mb-5" >
		  <Form.Label>Password <span className="text-danger">*</span></Form.Label>
		  <Form.Control type="password" placeholder="Enter The Password" />
		</Form.Group>

		<Form.Group className="col-sm-4 mb-5" >
		  <Form.Label>Conform Password <span className="text-danger">*</span></Form.Label>
		  <Form.Control type="password" placeholder="Enter the Conform Password" />
		</Form.Group>
         
		<div>
		<div>Allow Permissions <span className="text-danger m-2">*</span></div>
        <div className="form-check mt-2">
            <input type="checkbox" className="form-check-input"  id="audioCalls"/>
            <label>Audio Calls</label>
        </div>
        <div class="form-check mt-2">
            <input type="checkbox" class="form-check-input"  id="audioConference"/>
            <label>Audio Conference</label>
        </div>
        <div className="form-check mt-2">
            <input type="checkbox" className="form-check-input" id="gsmCalls"/>
            <label >Gsm Calls</label>
        </div>
        <div className="form-check mt-2">
            <input type="checkbox" className="form-check-input"  id="videoCalls"/>
            <label >Video Calls</label>
        </div>
    </div>
		 
         <button className='btn btn-primary m-2' style={{width:"120px"}}>Submit</button>
	   
	
		</div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default GCMModal;