import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {Columns} from "../../Columns/ViewTenent.jsx"
import Bin from "../../sass/icons/bin.svg";
import Edit from "../../sass/icons/Edit.svg";
import Button from "react-bootstrap/esm/Button.js";

const ViewTenent = () => {
	const Rows = [
        {
          sNo: 1,
          tenant: <input className="text-success fw-bold w-100  p-2 " value={"Tenant 1"}/> ,
          didNo:<input className="text-success fw-bold w-100  p-2 " value={"1234567890"}/> ,
          edit: <img className="m-1"src={Edit} alt="Dot Icon" />,
          delete: <img className="m-1"src={Bin} alt="Dot Icon" />,
        },
        {
          sNo: 2,
          tenant: <input className="text-success fw-bold w-100  p-2 " value={"Tenant 2"}/> ,
          didNo:<input className="text-success fw-bold w-100 p-2 " value={"900345678890"}/> ,
          edit: <img className="m-1" src={Edit} alt="Dot Icon" />,
          delete: <img className="m-1"src={Bin} alt="Dot Icon" />,
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
    <div className="text-end">
    <Button variant="primary p-2 mr-5 border-success border-solid " type="submit"  style={{width:"120px",borderRadius:"15px"}}>
      Submit
    </Button>
    </div>
    </>
	);
};
export default ViewTenent