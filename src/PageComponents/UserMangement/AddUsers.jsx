import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {Columns,SecondTableCoumns,ThridColumn,FourthColumn,FivthColumn,SixthColumn} from "../../Columns/AddUsers.jsx"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../sass/AddUsers.scss"
const AddUsers = () => {
	const[loading,setLoading]=useState(null)
	useEffect(()=>{
        setLoading(<h1>Loading...</h1>)
	},[])

	return (
		<>
		{/* <h6 className=" fw-bold  text-primary text-end  mt-2  pr-4"> + ADD USERS </h6> */}
		<div className="addusers">
			<Form>
		<Form.Group className="mb-3 w-50" controlId="formBasicEmail">
		  <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
		  <Form.Control type="email" placeholder="Enter email" />
		</Form.Group>

		<Form.Group className="mb-3 w-50" controlId="formBasicPassword">
		  <Form.Label>User Name (Tenant)  <span className="text-danger">*</span></Form.Label>
		  <Form.Control type="text" placeholder="Enter the username" />
		</Form.Group>

		<Form.Group className="mb-3 w-50" controlId="formBasicPassword">
		  <Form.Label>Mobile Number <span className="text-danger">*</span></Form.Label>
		  <Form.Control type="phonenumber" placeholder="Enter the phone number" />
		</Form.Group>

		<Form.Group className="mb-3 w-50" controlId="formBasicPassword">
		  <Form.Label>Extension <span className="text-danger">*</span></Form.Label>
		  <Form.Control type="text" placeholder="Enter the Extension number" />
		</Form.Group>
  
		<Form.Group className="mb-3 w-50" controlId="formBasicPassword">
		  <Form.Label>Password <span className="text-danger">*</span></Form.Label>
		  <Form.Control type="password" placeholder="Enter The Password" />
		</Form.Group>

		<Form.Group className="mb-3 w-50" controlId="formBasicPassword">
		  <Form.Label>Conform Password <span className="text-danger">*</span></Form.Label>
		  <Form.Control type="password" placeholder="Enter the Conform Password" />
		</Form.Group>
         
		<div>
		<div>Allow Permissions <span className="text-danger m-2">*</span></div>
        <div className="form-check mt-2">
            <input type="checkbox" className="form-check-input"  id="audioCalls"/>
            <label className="form-check-label fw-medium" for="audioCalls">Audio Calls</label>
        </div>
        <div class="form-check mt-2">
            <input type="checkbox" class="form-check-input"  id="audioConference"/>
            <label className="form-check-label fw-medium" for="audioConference">Audio Conference</label>
        </div>
        <div className="form-check mt-2">
            <input type="checkbox" className="form-check-input" id="gsmCalls"/>
            <label className="form-check-label fw-medium" for="gsmCalls">Gsm Calls</label>
        </div>
        <div className="form-check mt-2">
            <input type="checkbox" className="form-check-input"  id="videoCalls"/>
            <label className="form-check-label fw-medium" for="videoCalls">Video Calls</label>
        </div>
    </div>
		 

	    <div className="btnflex">
		  <input type="checkbox" className="form-check-input" />
		  <Button variant="primary m-3 border-success border-solid " type="submit"  style={{width:"120px",borderRadius:"15px"}}>
		    Update
		  </Button>
		</div>
	  </Form>
		</div>
		</>
	);
};

export default AddUsers;
