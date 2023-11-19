import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";

import { getFirestore, collection, onSnapshot} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

import Employee from "./Employee";

function EmployeeTable(){
    const db = getFirestore(firebaseApp);

    const [employeeList, setemployeeList] = useState([]);

    useEffect(()=>{
        try {
            
            const newEmployeeList = [];

            onSnapshot(collection(db, 'employeerecord'), snapshot => {
                snapshot.forEach(employee => {
                    const tempEmployee = employee.data()
                    tempEmployee ["employee_id"] = employee.id;
                    newEmployeeList.push(tempEmployee)
                });

                setemployeeList(newEmployeeList);
            })

        } catch (e){
            alert('Could not fetch Employee Data!')
        }
    },[])

    return(
        <>
            <Table responsive hover style={{cursor:'pointer'}}>
                <thead>
                    <tr className="text-center">
                        <th>Employee ID</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Department</th>
                        <th>Employment Status</th>
                        <th>Salary (₱)</th>
                        <th>On-leave</th>
                        <th>Account Active</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="text-center">
                        {
                            employeeList.map((employeeRecord) => (
                                <Employee
                                    key={employeeRecord.id}
                                    employeeid={employeeRecord.employeeID}
                                    lastname={employeeRecord.lastname}
                                    firstname={employeeRecord.firstname}
                                    middlename={employeeRecord.middlename}
                                    phonenumber={employeeRecord.phonenumber}
                                    email={employeeRecord.email}
                                    title={employeeRecord.title}
                                    department={employeeRecord.department}
                                    status={employeeRecord.status}
                                    salary={employeeRecord.salary}
                                    leave={employeeRecord.leave}
                                    account={employeeRecord.active}
                                    signedin={employeeRecord.signedin}
                                />
                            ))
                        }
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
export default EmployeeTable