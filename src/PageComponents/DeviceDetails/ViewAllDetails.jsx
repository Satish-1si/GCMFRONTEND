import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {Columns} from "../../Columns/ViewAllusers.jsx"

const ViewAllDetails = () => {
	const Rows = [
        {
            sNo: 1,
            username: "user6",
            ip: "192.168.1.6",
            imei: "765432109876543",
            date: "2024-08-02",
            os: "iOS",
          },
          {
            sNo: 2,
            username: "user7",
            ip: "192.168.1.7",
            imei: "456789012345678",
            date: "2024-08-03",
            os: "Android",
          }
      ];
	return (
		<BootstrapTable
			keyField="id"
			data={Rows}
			columns={Columns}
		/>
	);
};
export default ViewAllDetails