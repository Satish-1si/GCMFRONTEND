import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Columns } from "../../Columns/ViewTenent.jsx";
import Bin from "../../sass/icons/bin.svg";
import Edit from "../../sass/icons/Edit.svg";
import Button from "react-bootstrap/esm/Button.js";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import default styles

const ViewTenent = () => {
  const [tenantDetails, setTenantDetails] = useState([]);
  const DomainName = "http://localhost:3500/Admin/GcmDialler";

  useEffect(() => {
    const fetchTenantDetails = async () => {
      try {
        const response = await axios.get(`${DomainName}/TenantManagement/ViewTenant`);
        const responseArray = response.data.data.map(({ TenentRole, DidNo }, idx) => ({
          sNo: <h6 className="table-header">{idx + 1}</h6>,
          TenentRole:TenentRole,
          DidNo:DidNo,
          edit: <h6 className="table-header"><img src={Edit} alt="Edit Icon" /></h6>,
          delete:<h6 className="table-header"><img  src={Bin} alt="Delete Icon" /></h6>,
        }));
        console.log(responseArray)
        setTenantDetails(responseArray);
      } catch (error) {
        console.log(error);
        toast.error('Error fetching tenant details: ' + (error.response ? error.response.data : error.message));
      }
    };

    fetchTenantDetails();
  }, []);
console.log(tenantDetails)
  return (
    <>
      <BootstrapTable
        keyField="sNo" // Ensure this matches a unique field in your data
        data={tenantDetails}
        columns={Columns}
      />
      <ToastContainer />
    </>
  );
};

export default ViewTenent;
