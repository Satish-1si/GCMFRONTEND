// src/components/SideNav.js
import React, { useEffect, useState } from 'react';
import "../sass/sidenav.scss";
import user from "../sass/icons/user.svg";
import device from "../sass/icons/device.svg";
import Dot from "../sass/icons/dot.svg";
import settings from "../sass/icons/settings.svg";
import password from "../sass/icons/password.svg";
import NavIcon from "../sass/icons/navIcon.svg";
import imageBg from "../sass/images/bg_1.jpg"
import navIcon from "../sass/icons/navIcon.svg";
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';
import { Outlet,Link } from 'react-router-dom';
const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const[loading,setLoading]=useState(true)
	useEffect(()=>{
         setTimeout(()=>{
			setLoading(false)
		 },300)
	},[])

  return (
   
    <div className="Dashboard" style={{position:"static"}} >
      <div className="customize"   >
      {<h6 className="p-0" style={{overflow:"hidden",color:"white"}}>
                 <img src={navIcon} alt="Dot Icon" className='p-3'
                 onClick={()=>{ setIsCollapsed((b)=>!b)}}
                />
                  {(isCollapsed===false)?"":""}
                  </h6>}
        <ProSidebarProvider  >
          <Sidebar 
          collapsed={isCollapsed} 
          className="app"
          backgroundColor="rgb(34, 45, 50)"
          style={{color:"#FDF6F6",height:"100vh",margin:"0px",border:"none"}}
          >
            <Menu>
                   <SubMenu title="User Management"  label="User Management" icon={<img src={user} alt="User Icon" />}>
                        <MenuItem className='MenuItem'><img src={Dot} alt="Dot Icon" /> 
                         <Link to="/GcmDialler/UserManagement/AddUsers"> Add New Users</Link> 
                        </MenuItem>
                        <MenuItem className=' MenuItem'><img src={Dot} alt="Dot Icon" /> 
                        <Link to="/GcmDialler/UserManagement/ViewUsers"> View Users</Link> 
                        </MenuItem>
                   </SubMenu>

                   <SubMenu title="Device Details" label="Device Details" icon={<img src={device} alt="Device Icon" />}>
                         <MenuItem className='MenuItem'><img src={Dot} alt="Dot Icon" />
                             <Link to="/GcmDialler/DeviceDetails/ViewAllUsers"> View All Details</Link> 
                         </MenuItem>
                         <MenuItem className='MenuItem'><img src={Dot} alt="Dot Icon" />
                              <Link to="/GcmDialler/DeviceDetails/AndroidUser">  View Android Users</Link>  
                         </MenuItem>
                         <MenuItem className='MenuItem'><img src={Dot} alt="Dot Icon" />
                              <Link to="/GcmDialler/DeviceDetails/IphoneUser">  View iPhone Users </Link>
                          </MenuItem>
                   </SubMenu>

                   <SubMenu title="Tenant Management" label="Tenant Management" icon={<img src={password} alt="Password Icon" />}>
                     <MenuItem className='MenuItem'><img src={Dot} alt="Dot Icon" />
                          <Link to="/GcmDialler/TenantManagement/AddTenant">  Add Tenant </Link>
                     </MenuItem>
                     <MenuItem className='MenuItem'><img src={Dot} alt="Dot Icon" />
                         <Link to="/GcmDialler/TenantManagement/ViewTenant">  View Tenant</Link> 
                     </MenuItem>
                   </SubMenu>

                   <SubMenu title="Settings" label="Settings" icon={<img src={settings} alt="Settings Icon" />}>
                     <MenuItem className='MenuItem'><img src={Dot} alt="Dot Icon" />
                         <Link to="/GcmDialler/Settings/ConfigurationSession">  Configure Session Time</Link>
                     </MenuItem>
                     <MenuItem className='MenuItem'><img src={Dot} alt="Dot Icon" />
                        <Link to="/GcmDialler/settings/ChangePassword">  Change Password </Link>
                    </MenuItem>
                   </SubMenu>
              </Menu>
          </Sidebar>

        </ProSidebarProvider>
        
      </div>
      <div className='section' style={{width:"100vw",height:"100vh",background:"white"}}>
         <h2 className='hf text-white p-3' style={{height:"10%"}}>Super Admin panel</h2>
         <div className='m-2' style={{height:"89.9%",	background:"#f7f7f7"}}>
             <Outlet/>
         </div>
         <Link to="/GcmDialler"> 
           <p class="hf subsection m-0 text-light" >
            Copyright © 2017 GCM Dialer. All rights reserved.
           </p>
         </Link>
         </div>
    </div>
  );
}

export default SideNav;
