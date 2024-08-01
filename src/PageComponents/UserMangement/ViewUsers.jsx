import React, { useState } from 'react'
import { Columns } from '../../Columns/ViewUsers';
import BootstrapTable from 'react-bootstrap-table-next';
import Bin from "../../sass/icons/bin.svg";
import Edit from "../../sass/icons/Edit.svg";
import GreenDot from "../../sass/icons/GreenDot.svg";
import RedDot from "../../sass/icons/RedDot.svg";
import Profile from "../../sass/icons/profile.svg";
import View from "../../sass/icons/view.svg";
import GCMModal from '../../BootstrapModals/Modal';
import { Link, useNavigate } from 'react-router-dom';
import DeleteModal from '../../BootstrapModals/DeleteModal';

const ViewUsers = () => {
	const [showModal,SetShowModal]=useState(false)
	const navigate = useNavigate();
    const Rows = [
		{
			sno:1,
            image:<img src={Profile} alt="Dot Icon" />,
			name: "John Doe",
			mobile: "1234567890",
			username: "johndoe",
			sipStatus: "Active",
			status: <>Online  <img src={GreenDot}   alt="Dot Icon" /></>,
			Actions: <>
			  <img src={Edit} alt="Dot Icon" className='m-1' onClick={()=>{
				 navigate("/GcmDialler/UserManagement/EditUsers");
			  }}/>
			  <img src={Bin} alt="Dot Icon" className='m-1' onClick={()=>SetShowModal(true)}/>
			</> ,
		},
		{
            sno:2,
			image: <img src={Profile} alt="Dot Icon" />,
			name: "Jane Doe",
			mobile: "0987654321",
			username: "janedoe",
			sipStatus: "Inactive",
			status: <>
			Offline  <img className="ml-5" src={RedDot} alt="Dot Icon" />
			</>,
			Actions: <>
			  <img src={Edit} alt="Dot Icon" className='m-1' onClick={()=>{
				     navigate("/GcmDialler/UserManagement/EditUsers");  
			  }}/>
			  <img src={Bin} alt="Dot Icon" className='m-1' onClick={()=>SetShowModal(true)}/>
			</>,
		},
		// Add more rows as needed
    ];
      
	return (
	  <>
	    <BootstrapTable
			keyField="id"
			data={Rows}
			columns={Columns}
		/>
		 <DeleteModal show={showModal} onHide={SetShowModal} message={"Are you sure to delete this user"}/>
	  </>
	);
}

export default ViewUsers