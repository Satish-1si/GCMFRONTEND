import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {Columns} from "../../Columns/AddTenent.jsx"
import Button from "react-bootstrap/esm/Button.js";

const AddTenent = () => {
	const products = [
		{
			Tenent:<input className="text-success fw-bold w-75  p-2 m-2" value={"saiRam"}/>,
			DiDNO:<input className="text-success fw-bold w-75  p-2 m-2" value={"214425fsggsb677"}/> ,
		},
	];
	return (
		<>
		<h5 className=" fw-bold m-2"> * Add Tenent ...</h5>
		<BootstrapTable
			keyField="id"
			data={products}
			columns={Columns}
		/>

		  <div className="text-end">
		  <Button variant="primary mr-5 border-success border-solid p-2 " type="submit"  style={{width:"120px",borderRadius:"15px"}}>
		    Submit
		  </Button>
		  </div>
		</>
		
	);
};
export default AddTenent