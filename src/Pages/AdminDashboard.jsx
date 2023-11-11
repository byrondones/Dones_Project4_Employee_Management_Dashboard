import React, { useEffect, useState } from "react";
import { ListGroup, Table } from "react-bootstrap";
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

import EmployeeList from "./EmployeeList";
import Employee from "./Employee";

function AdminDashboard(){
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

    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
    };

    return(
        <>
        <div className="container-fluid mt-3 mb-3">
                <div className="row">
                    <h1 className="text-center fw-bold">Admin Dashboard</h1>
                <div className="row">
                    <div className="col-3">
                            <div className="div list-group">
                                <ListGroup.Item action onClick={alertClicked}>
                                    Add Employee
                                </ListGroup.Item>

                                <ListGroup.Item action>
                                    Logged-in
                                </ListGroup.Item>

                                <ListGroup.Item action>
                                    Birthdays
                                </ListGroup.Item>

                                <ListGroup.Item action>
                                    Currently Off
                                </ListGroup.Item>
                                
                                <ListGroup.Item action>
                                    Work From Home
                                </ListGroup.Item>

                                <ListGroup.Item action>
                                    Currently on Sick Leave
                                </ListGroup.Item>
                            </div>
                        </div>

                    <div className="col-6 text-center border" style={{height:800}}>
                        <h1 className="fw-bold">Employee List</h1>
                            <Table responsive hover style={{cursor:'pointer'}}>
                                    <thead >
                                        <tr>
                                            <th>Employee ID</th>
                                            <th>Last Name</th>
                                            <th>First Name</th>
                                            <th>Email</th>
                                            <th>Title</th>
                                            <th>Account</th>
                                            <th>Logged-in</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            {
                                            employeeList.map((employeeRecord) => (
                                                <Employee
                                                    key={employeeRecord.id}
                                                    employeeid={employeeRecord.employeeID}
                                                    lastname={employeeRecord.lastname}
                                                    firstname={employeeRecord.firstname}
                                                    email={employeeRecord.email}
                                                    title={employeeRecord.title}
                                                    account={employeeRecord.account}
                                                    signedin={employeeRecord.signedin}
                                                />
                                            ))
                                            }
                                        </tr>
                                    </tbody>
                            </Table>
                        </div>

                    <div className="col-3 card h-75">
                        <h1 className="text-center">Employee Card</h1>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}
export default AdminDashboard
