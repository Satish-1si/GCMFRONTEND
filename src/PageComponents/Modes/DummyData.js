
import GreenDot from "../../sass/icons/GreenDot.svg";
import RedDot from "../../sass/icons/RedDot.svg";
export const dummyData = [  
    {  
        Email: "john.doe@example.com",  
        PhoneNO: "+1234567890",  
        status: <>Online  <img className="ml-5" src={GreenDot} alt="Dot Icon" /></>,  
        Extension: "1001",  
        Password: "Pass@123",  
        AllowPermissions: true  
    },  
    {  
        Email: "jane.smith@example.com",  
        PhoneNO: "+0987654321",  
        status: <>Offline  <img className="ml-5" src={RedDot} alt="Dot Icon" /></>,  
        Extension: "1002",  
        Password: "Pass@456",  
        AllowPermissions: false  
    },  
   
];  