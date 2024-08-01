import React from 'react'
import { Columns } from '../../Columns/IphoneUsers';
import BootstrapTable from 'react-bootstrap-table-next';
const IphoneUsers = () => {
    const Rows = [
        {
            sNo: 1,
            username: "user3",
            ip: "192.168.1.3",
            imei: "234567890123456",
            date: "2024-08-01",
            os: "Windows",
          },
          {
            sNo: 2,
            username: "user4",
            ip: "192.168.1.4",
            imei: "876543210987654",
            date: "2024-08-01",
            os: "Linux",
          },
      ];
	return (
		<BootstrapTable
			keyField="id"
			data={Rows}
			columns={Columns}
		/>
	);
}

export default IphoneUsers