import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {Columns} from "../../Columns/AndroidUsers.jsx"
import paginationFactory from "react-bootstrap-table2-paginator";
import CSV from "../../sass/icons/csv.svg";
import PDF from "../../sass/icons/pdf.svg";

const AndroidUsers = () => {
    const[placeHloder,setPlaceHolder]=useState("Enter The User Details")
	const Rows = [
        {
          sNo: 1,
          username: "user1",
          ip: "192.168.1.1",
          imei: "123456789012345",
          date: "2024-07-30",
          os: "Android",
        },
        {
          sNo: 2,
          username: "user2",
          ip: "192.168.1.2",
          imei: "987654321098765",
          date: "2024-07-30",
          os: "iOS",
        },
      ];
      
    const handleTableChange=(type,object)=>{

    }
	return (
        <>
        <div className="p-3 mb-3 border Search" style={{backgroundColor:"#fffdfb"}} >
         
            <input type="text" className="p-2 border rounded-1 border-dark" placeholder={"Enter The UserDetails"}/>
            {/* <button className="bg-primary border border-none p-2 rounded-3 text-light ">Search</button> */}
                  <div className=" ICONS">
                     <img  style={{width:"40px",height:"30px"}}src={CSV}/>
                     <img style={{width:"40px",height:"30px"}}src={PDF}/>
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
};

export default AndroidUsers