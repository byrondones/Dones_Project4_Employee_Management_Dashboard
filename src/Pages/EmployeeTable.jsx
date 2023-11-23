import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { getFirestore, collection, onSnapshot} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

import Employee from "./Employee";
import EmployeeCard from "./EmployeeCard";

function EmployeeTable(){
    const db = getFirestore(firebaseApp);

    
    const [employeeList, setemployeeList] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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
        postal: '',
        employeeID: '',
        title: '',
        department: '',
        dateofhire: '',
        active: '',
        salary: '',
        status: '',
        yearsofcontract: '',
        wfh: '',
        leave:'',
        emergencyName: '',
        emergencyStreet: '',
        emergencyBarangay: '',
        emergencyCity: '',
        emergencyProvince: '',
        emergencyPostal: '',
        emergencyEmail: '',
        emergencyCell: '',
        emergencyRelationship: ''
    });

    const testClick = () => {
        alert("Hello")
    }

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

    const updateemployee = (employeeID,lastname,firstname,middlename,suffix,gender
        ,birthday,email,phonenumber,address1,address2,street,barangay,city,province,
        postal,title,department,dateofhire,active,salary,status,yearsofcontract,wfh,
        leave,emergencyName,emergencyStreet,emergencyBarangay,emergencyCity,emergencyProvince,
        emergencyPostal,emergencyCell,emergencyRelationship,account) => {
        setShow(true);

        setEmployee({
            employeeID: employeeID,
            lastname: lastname,
            firstname: firstname,
            middlename: middlename,
            suffix: suffix,
            gender: gender,
            birthday: birthday,
            email: email,
            phonenumber: phonenumber,
            address1: address1,
            address2: address2,
            street: street,
            barangay: barangay,
            city: city,
            province: province,
            postal: postal,
            title: title,
            department: department,
            dateofhire: dateofhire,
            active: active,
            salary: salary,
            status: status,
            yearsofcontract: yearsofcontract,
            wfh: wfh,
            leave: leave,
            emergencyName: emergencyName,
            emergencyStreet: emergencyStreet,
            emergencyBarangay: emergencyBarangay,
            emergencyCity: emergencyCity,
            emergencyProvince: emergencyProvince,
            emergencyPostal: emergencyPostal,
            emergencyCell: emergencyCell,
            emergencyRelationship: emergencyRelationship,
            account: account,
        });


    }

    const handleStudentUpdate = () => {

        // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(firebaseApp);

        const employeeRef = doc(db, "employeerecord", employee.EmployeeID);
        
        updateDoc(employeeRef, {
            firstname: employee.firstname,
            lastname: employee.lastname,
            grade: employee.grade
        });

        setEditToggle(false);
        setEmployee({
            firstname: '',
            lastname: '',
            grade: '',
        });
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
                                employeeID={employeeRecord.employee_id}
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
                                    active={employeeRecord.active}
                                    gender={employeeRecord.gender}
                                    suffix={employeeRecord.suffix}
                                    birthday={employeeRecord.birthday}
                                    address1={employeeRecord.address1}
                                    address2={employeeRecord.address2}
                                    street={employeeRecord.street}
                                    barangay={employeeRecord.barangay}
                                    city={employeeRecord.city}
                                    province={employeeRecord.province}
                                    postal={employeeRecord.postal}
                                    dateofhire={employeeRecord.dateofhire}
                                    yearsofcontract={employeeRecord.yearsofcontract}
                                    wfh={employeeRecord.wfh}
                                    emergencyName={employeeRecord.emergencyName}
                                    emergencyStreet={employeeRecord.emergencyStreet}
                                    emergencyBarangay={employeeRecord.emergencyBarangay}
                                    emergencyCity={employeeRecord.emergencyCity}
                                    emergencyProvince={employeeRecord.emergencyProvince}
                                    emergencyPostal={employeeRecord.emergencyPostal}
                                    emergencyCell={employeeRecord.emergencyCell}
                                    emergencyRelationship={employeeRecord.emergencyRelationship}

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
                >
        <Modal.Header closeButton>
        <Modal.Title>Employee Card</Modal.Title>
        </Modal.Header>
                        <Modal.Body>
                        <EmployeeCard
                            employee={employee}
                        />
                        </Modal.Body> 
        <Modal.Footer>

        <Button variant="warning" onClick={testClick}>
                Update
            </Button>

            <Button variant="danger" onClick={testClick}>
                Delete
            </Button>

            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
}
export default EmployeeTable