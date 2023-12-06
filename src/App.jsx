import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import React, { useState } from "react";

import AdminDashboard from './Pages/AdminDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeTable from './Pages/EmployeeTable';
import AddEmployee from './Pages/AddEmployee';
import Login from './Auth/Login';

function App() {
  const [employeeList, setEmployeeList] = useState([]);
  const [employee, setEmployee] = useState({
      lastname: '',
      firstname: '',
      middlename: '',
      suffix: '',
      gender: '',
      birthday: '',
      email: '',
      phonenumber: '',
      address1: '',
      address2: '',
      street: '',
      barangay: '',
      city: '',
      province: '',
      zipcode: '',
      role: '',
      title: '',
      department: '',
      dateofhire: '',
      active: '',
      salary: '',
      eStatus: '',
      yearsofcontract: '',
      wfh: '',
      leave:'',
      emergencyName: '',
      emergencyStreet: '',
      emergencyBarangay: '',
      emergencyCity: '',
      emergencyProvince: '',
      emergencyZipcode: '',
      emergencyEmail: '',
      emergencyCell: '',
      emergencyRelationship: '',
      search: '',
  });

  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<AdminDashboard />}>
                <Route path='employeelist' element={<EmployeeTable
                  employeeList={employeeList}
                  employee={employee}
                  setEmployeeList={setEmployeeList}
                  setEmployee={setEmployee}
                  />} />
                <Route path='addemployee' element={<AddEmployee/>} />
                <Route path='/' element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
