import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {Columns} from "../../Columns/AddTenent.jsx"
import Button from "react-bootstrap/esm/Button.js";
import axios from "axios"
import { toast } from "react-toastify";

const AddTenent = () => {
	const[TenantDetails,SetTenantDetails]=useState({TenentRole:null,DidNo:null})
    const DomainName="http://localhost:3500/Admin/GcmDialler"
	const products = [
		{
			Tenent:<input className="text-success fw-bold w-75  p-2 m-2" 
			              onChange={(e)=>{
							SetTenantDetails((prev)=>({...prev,TenentRole:e.target.value}))
						  }} 
						  value={TenantDetails?.TenentRole}
						  />,
			DiDNO:<input className="text-success fw-bold w-75  p-2 m-2" 
		            	value={TenantDetails?.DidNo}
		            	onChange={(e)=>{
				          SetTenantDetails((prev)=>{
							if(e.target.value*1){
								return ({...prev,DidNo:e.target.value})
							}
						 })
			            }} 
			/> ,
		},
	];
	const handleSubmit = async () => {
		try {
		  const response = await axios.post(`${DomainName}/TenantManagement/AddTenant`, TenantDetails);
		  console.log(response.data.status)
		  toast.success(response.data.status);
		} catch (error) {
			console.log(error)
			toast.error(error.message)
		}
	  };
	return (
		<>
		<h5 className=" fw-bold m-2"> * Add Tenent ...</h5>
		<BootstrapTable
			keyField="id"
			data={products}
			columns={Columns}
		/>
		  <div className="text-end">
		  <Button variant="primary mr-5 border-success border-solid p-2 "
		          type="submit" 
		          style={{width:"120px",borderRadius:"15px"}}
				  onClick={handleSubmit}
		   >
		    Submit
		  </Button>
		  </div>
		</>
		
	);
};
export default AddTenent