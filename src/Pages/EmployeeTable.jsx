import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { getFirestore, collection, onSnapshot, doc, deleteDoc, updateDoc} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

import Employee from "./Employee";
import EmployeeCard from "./EmployeeCard";
import EditEmployee from "./EditEmployee";

function EmployeeTable({employee, employeeList, setEmployee, setEmployeeList}){
    const [show, setShow] = useState(false);
    

    useEffect(()=>{
        const db = getFirestore(firebaseApp);
        try {
            onSnapshot(collection(db, 'employeerecords'), snapshot => {
                const newEmployeeList = [];

                snapshot.forEach(employee => {
                    const tempEmployee = employee.data()
                    tempEmployee ["employee_id"] = employee.id;
                    newEmployeeList.push(tempEmployee)
                });

                setEmployeeList(newEmployeeList);
            })

        } catch (e){
            alert('Could not fetch Employee Data!')
        }
    },[])

    const handleClose = ()=> {setShow(false); setShowInput(false)};

    const updateemployee = (employeeID,lastname,employee) => {
        setShow(true)

        setEmployee({
            employeeID: employeeID,
            lastname: lastname,
        })
    }

    return(
        <>
            <div className="container-fluid">
                <div className="col-sm-12">
                <Table responsive>
                <thead>
                    <tr className="text-center">

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
                    {       
                        employeeList.map((employeeRecord) => (
                            <Employee
                            employee={employeeRecord.id}
                            lastname={employeeRecord.lastname}

                            updateemployee={updateemployee}
                            />
                        ))
                    }
                </tbody>
            </Table>
                </div>
            </div>

            {/* Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                centered='true'
                scrollable='true'
                >
        <Modal.Header closeButton>
        <Modal.Title>Employee Card</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                {/* {
                    showInput
                    ?
                    (

                        <EditEmployee
                        employee={employee}
                        setEmployee={setEmployee}
                        handleEmployeeUpdate={handleEmployeeUpdate()}
                        />
                    )
                    :
                    (
                        <EmployeeCard
                            employee={employee}
                        />
                    )
                } */}

                <EmployeeCard
                employee={employee}
                />

            </Modal.Body> 
        <Modal.Footer>
{/* 
            <Button variant="warning" onClick={editeemployee}>
                Update
            </Button>

            <Button variant="danger" onClick={deleteEmployee}>
                Delete
            </Button> */}

            {/* <Button variant="info" onClick={handleShowInputShow()}>
                Back
            </Button> */}

            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
}
export default EmployeeTable