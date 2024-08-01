import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {Columns} from "../../Columns/changePassword.jsx"
import Button from "react-bootstrap/esm/Button.js";

const ChangePassword = () => {
	const products = [
		{
			Current_Password: <input className="text-primary fw-bold w-75 p-2 m-2" value={"Sa@ghnm1"} />,
			New_password: <input className="text-success fw-bold w-75  p-2 m-2" value={"Y$3789055"}/>,
			Conform_Password: <input className="text-success fw-bold w-75  p-2 m-2" value={"Y$3789055"}/>
		},
	];
	return (
		<>
		<h5 className=" fw-bold m-2"> $Password Settings ...</h5>
		<BootstrapTable
			keyField="id"
			data={products}
			columns={Columns}
		/>
		  <div className="text-end">
		  <Button variant="primary mr-5 border-success border-solid p-2" type="submit"  style={{width:"120px",borderRadius:"15px"}}>
		    Submit
		  </Button>
		  </div>
		</>
	);
};
export default ChangePassword