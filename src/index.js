import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Globals from './global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import AddUsers from "../src/PageComponents/UserMangement/AddUsers"
import ViewUsers from "../src/PageComponents/UserMangement/ViewUsers"


import AndroidUsers from "../src/PageComponents/DeviceDetails/AndroidUsers"
import IphoneUsers from "../src/PageComponents/DeviceDetails/IphoneUsers"
import ViewAllDetails from "../src/PageComponents/DeviceDetails/ViewAllDetails"


import AddTenent from "../src/PageComponents/TenantManagemant/AddTenent"
import ViewTenent from "../src/PageComponents/TenantManagemant/ViewTenent"


import ChangePassword from "../src/PageComponents/Settings/ChangePassword"
import ConfigurationSession from "../src/PageComponents/Settings/ConfigurationSession"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/GcmDialler" element={<Globals />} />
        <Route path="/GcmDialler/UserManagement" element={<Globals />}>
          <Route path="AddUsers"  element={<AddUsers/>} />
          <Route path="ViewUsers" element={<ViewUsers/>} />
          <Route path="EditUsers" element={<AddUsers/>} />

        </Route>
        <Route path="/GcmDialler/DeviceDetails" element={<Globals />}>
          <Route path="ViewAllUsers" element={<ViewAllDetails/>} />
          <Route path="AndroidUser"  element={<AndroidUsers/> } />
          <Route path="IphoneUser"   element={<IphoneUsers/>} />
        </Route>
        <Route path="/GcmDialler/TenantManagement" element={<Globals />}>
          <Route path="AddTenant"  element={<AddTenent/>} />
          <Route path="ViewTenant" element={<ViewTenent/>} />
        </Route>
        <Route path="/GcmDialler/Settings" element={<Globals />}>
          <Route path="ConfigurationSession" element={<ConfigurationSession/>} />
          <Route path="ChangePassword"       element={<ChangePassword/>} />
        </Route>
        <Route path="*" element={<h6 className='text-danger text-center p-3'>Page Not Found </h6>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
