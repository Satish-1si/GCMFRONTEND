import React from 'react'
import { Columns } from '../../Columns/ModeOne'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import CSV from "../../sass/icons/csv.svg";
import PDF from "../../sass/icons/pdf.svg";
import GreenDot from "../../sass/icons/GreenDot.svg";
import RedDot from "../../sass/icons/RedDot.svg";


const ModeOne = () => {
	const Rows = [
		{
			Mode: "Active",
			Email: "john.doe@example.com",
			PhoneNO: "+1234567890",
			status: <>Offline  <img className="ml-5" src={RedDot} alt="Dot Icon" /></>,
			AllowPermissions: true,
		},
		{
			Mode: "Active",
			Email: "john.doe@example.com",
			PhoneNO: "+1234567890",
			status: <>Online  <img className="ml-5" src={GreenDot} alt="Dot Icon" /></>,
			AllowPermissions: true,
		},
	];
      
    const handleTableChange=(type,object)=>{

    }
	return (
		<>
			<div
				className="p-3 mb-3 border Search"
				style={{ backgroundColor: "#fffdfb" }}
			>
				<input
					type="text"
					className="p-2 border rounded-1 border-dark"
					placeholder={
						"Enter The UserDetails"
					}
				/>
				<div className=" ICONS">
					<img
						style={{
							width: "40px",
							height: "30px",
						}}
						src={CSV}
					/>
					<img
						style={{
							width: "40px",
							height: "30px",
						}}
						src={PDF}
					/>
				</div>
			</div>
			<BootstrapTable
				keyField="id"
				remote
				data={Rows}
				columns={Columns}
				onTableChange={handleTableChange}
				className="bg-white"
				pagination={paginationFactory({
					page: 1,
					sizePerPage: 3,
					totalSize: 10,
				})}
			/>
		</>
	);
}

export default ModeOne