import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { getFirestore, collection, onSnapshot, doc, deleteDoc, updateDoc} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

import Employee from "./Employee";
import EmployeeCard from "./EmployeeCard";
import EditEmployee from "./EditEmployee";

function EmployeeTable(){
    const [showInput, setShowInput] = useState(false);
    const [show, setShow] = useState(false);

    const [employeeList, setemployeeList] = useState([]);
    const [employee, setemployee] = useState({
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
        role: '',
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

    useEffect(()=>{
        const db = getFirestore(firebaseApp);
        try {
            onSnapshot(collection(db, 'employeerecord'), snapshot => {
                const newEmployeeList = [];

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

    const handleClose = ()=> {setShow(false); setShowInput(false)};

    const deleteEmployee = () => {
        // Initialize Cloud Firestore and get a reference to the service
        const db = getFirestore(firebaseApp);

        confirm(`Are you sure you want to delete employee?`).then(
            deleteDoc(doc(db, "employeerecord", employee.employeeID)),
            setShow(false)
        )
        }

    const updateemployee = (employeeID,lastname,firstname,middlename,suffix,gender
        ,birthday,email,phonenumber,address1,address2,street,barangay,city,province,
        postal,title,department,dateofhire,active,salary,status,yearsofcontract,wfh,
        leave,emergencyName,emergencyEmail,emergencyStreet,emergencyBarangay,emergencyCity,emergencyProvince,
        emergencyPostal,emergencyCell,emergencyRelationship,account,role) => {

        setShow(true)

        setemployee({
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
            role: role,
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
            emergencyEmail: emergencyEmail,
            emergencyRelationship: emergencyRelationship,
            account: account,
        });
    }

    const editeemployee = () => {
        setShowInput(true)
    }

    const handleEmployeeUpdate = () => {
        // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(firebaseApp);

        const employeeRef = doc(db, "employeerecord", employee.EmployeeID);
        
        updateDoc(employeeRef, {
            lastname: employee.lastname,
            firstname: employee.firstname,
            middlename: employee.middlename,
            suffix: employee.suffix,
            gender: employee.gender,
            birthday: employee.birthday,
            email: employee.email,
            phonenumber: employee.phonenumber,
            address1: employee.address1,
            address2: employee.address2,
            street: employee.street,
            barangay: employee.barangay,
            city: employee.city,
            province: employee.province,
            postal: employee.postal,
            role: employee.role,
            title: employee.title,
            department: employee.department,
            dateofhire: employee.dateofhire,
            active: employee.active,
            salary: employee.salary,
            status: employee.status,
            yearsofcontract: employee.yearsofcontract,
            wfh: employee.wfh,
            leave:employee.leave,
            emergencyName: employee.emergencyName,
            emergencyStreet: employee.emergencyStreet,
            emergencyBarangay: employee.emergencyBarangay,
            emergencyCity: employee.emergencyCity,
            emergencyProvince: employee.emergencyProvince,
            emergencyPostal: employee.emergencyPostal,
            emergencyEmail: employee.emergencyEmail,
            emergencyCell: employee.emergencyCell,
            emergencyRelationship: employee.emergencyRelationship,
        });

        handleClose();

        setemployee({
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
            role: '',
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
                                    emergencyEmail={employeeRecord.emergencyEmail}
                                    emergencyRelationship={employeeRecord.emergencyRelationship}
                                    role={employeeRecord.role}

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
                {
                    showInput
                    ?
                    (

                        <EditEmployee
                        employee={employee}
                        setemployee={setemployee}
                        handleEmployeeUpdate={handleEmployeeUpdate}
                        />
                    )
                    :
                    (
                        <EmployeeCard
                            employee={employee}
                        />
                    )
                }
            </Modal.Body> 
        <Modal.Footer>

            <Button variant="warning" onClick={editeemployee}>
                Update
            </Button>

            <Button variant="danger" onClick={deleteEmployee}>
                Delete
            </Button>

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