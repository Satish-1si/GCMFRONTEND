import Dashboard from "./components/Dashboard";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./global.scss";
import { useEffect, useState } from "react";




const Global = () => {
	const[loading,setLoading]=useState(true)
	useEffect(()=>{
         setTimeout(()=>{
			setLoading(false)
		 },300)
	},[])
	return (
		
			<>
			  {
				loading===true?<h5 className="text-center fw-bold pt-3">loading....</h5>:<Dashboard/>
			  }
			</>
		
	);
};

export default Global;
