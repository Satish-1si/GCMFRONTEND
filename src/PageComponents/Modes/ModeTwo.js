import React from 'react'
import { Columns } from '../../Columns/ModeTwo'
import BootstrapTable from 'react-bootstrap-table-next';
import { dummyData } from './DummyData';
import paginationFactory from "react-bootstrap-table2-paginator";
import CSV from "../../sass/icons/csv.svg";
import PDF from "../../sass/icons/pdf.svg";
const ModeTwo = () => {
	const Rows =dummyData
    const rowStyle = (row, rowIndex) => {
       
      };
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
                hover={true}
				pagination={paginationFactory({
					page: 1,
					sizePerPage: 3,
					totalSize: 10,
				})}
			/>
		</>
	);
}

export default ModeTwo