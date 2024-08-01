import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {Columns} from "../../Columns/Configrationsession.jsx"
import Button from "react-bootstrap/esm/Button.js";

const ConfigurationSession = () => {
	const products = [
		{
			Seconds: <input className="text-primary fw-bold w-75 p-2 m-2" value={"10 sec"} />,
			LastUpdate: <input className="text-primary fw-bold w-75  p-2 m-2" value={"24-02-2024"}/>,
			Update: <input className="text-primary fw-bold w-75  p-2 m-2" value={"24-07-2024"}/>
		},
	];
	return (
		<>
		<h5 className=" fw-bold m-2"> $Configration Session...</h5>
		<BootstrapTable
			keyField="id"
			data={products}
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
export default ConfigurationSession