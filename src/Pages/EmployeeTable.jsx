import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { getFirestore, collection, onSnapshot, doc, deleteDoc, updateDoc} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Employee from "./Employee";
import EmployeeCard from "./EmployeeCard";
import EditEmployee from "./EditEmployee";
import Login from "../Auth/Login";

function EmployeeTable({employee,employeeList,setEmployee,setEmployeeList}){
    const [show, setShow] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [Authenticated, setAuthenticated] = useState(false);
    const [userProperties, setUserProperties] = useState({});

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

        const auth = getAuth(firebaseApp);
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setAuthenticated(true)
            console.log(user.providerData);
            setUserProperties(user);
        } else {
            // User is signed out
            // ...
        }
        });
    },[])

    const handleClose = ()=> {setShow(false); setShowInput(false)};

    const updateemployee = (employeeID, lastname, firstname, middlename, suffix, gender, birthday, email, phonenumber, address1, address2, street, barangay, city,
        province, zipcode, title, department, dateofhire, active, salary, eStatus, role, yearsofcontract, wfh, leave, emergencyName,
        emergencyCell, emergencyEmail, emergencyRelationship, emergencyStreet, emergencyBarangay, emergencyCity, emergencyProvince,
        emergencyZipcode) => {

        setShow(true)

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
            zipcode: zipcode,
            title: title,
            department: department,
            dateofhire: dateofhire,
            active: active,
            salary: salary,
            eStatus: eStatus,
            role: role,
            yearsofcontract: yearsofcontract,
            wfh: wfh,
            leave: leave,
            emergencyName: emergencyName,
            emergencyEmail: emergencyEmail,
            emergencyCell: emergencyCell,
            emergencyRelationship: emergencyRelationship,
            emergencyStreet: emergencyStreet,
            emergencyBarangay: emergencyBarangay,
            emergencyCity: emergencyCity,
            emergencyProvince: emergencyProvince,
            emergencyZipcode: emergencyZipcode,
        })
    }

    const editemployee = () => {
        setShowInput(true)
    }

    const handleEmployeeUpdate = () => {
        // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(firebaseApp);

    const employeeRef = doc(db, "employeerecords", employee.employeeID);
    
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
            zipcode: employee.zipcode,
            title: employee.title,
            department: employee.department,
            dateofhire: employee.dateofhire,
            active: employee.active,
            salary: employee.salary,
            eStatus: employee.eStatus,
            role: employee.role,
            yearsofcontract: employee.yearsofcontract,
            wfh: employee.wfh,
            leave: employee.leave,
            emergencyName: employee.emergencyName,
            emergencyEmail: employee.emergencyEmail,
            emergencyCell: employee.emergencyCell,
            emergencyRelationship: employee.emergencyRelationship,
            emergencyStreet: employee.emergencyStreet,
            emergencyBarangay: employee.emergencyBarangay,
            emergencyCity: employee.emergencyCity,
            emergencyProvince: employee.emergencyProvince,
            emergencyZipcode: employee.emergencyZipcode,
        });

        handleClose()


        setEmployee({
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
        });
    }

    const deleteEmployee = () => {
        // Initialize Cloud Firestore and get a reference to the service
        const db = getFirestore(firebaseApp);

        confirm(`Are you sure you want to delete this employee?`).then(
            deleteDoc(doc(db, "employeerecords", employee.employeeID)),
            setShow(false)
        )
    }

    const changeBtn = () => {
        setShow(true);
        setShowInput(false);
    }

if(Authenticated){
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
                        <th>Role</th>
                        <th>Account Active</th>
                    </tr>
                </thead>

                <tbody hover="true">
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
                            eStatus={employeeRecord.eStatus}
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
                            zipcode={employeeRecord.zipcode}
                            dateofhire={employeeRecord.dateofhire}
                            yearsofcontract={employeeRecord.yearsofcontract}
                            wfh={employeeRecord.wfh}
                            role={employeeRecord.role}
                            emergencyName={employeeRecord.emergencyName}
                            emergencyCell={employeeRecord.emergencyCell}
                            emergencyEmail={employeeRecord.emergencyEmail}
                            emergencyStreet={employeeRecord.emergencyStreet}
                            emergencyBarangay={employeeRecord.emergencyBarangay}
                            emergencyRelationship={employeeRecord.emergencyRelationship}
                            emergencyCity={employeeRecord.emergencyCity}
                            emergencyProvince={employeeRecord.emergencyProvince}
                            emergencyZipcode={employeeRecord.emergencyZipcode}

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
        <Modal.Title className="fw-bold">Employee Card</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                {
                    showInput
                    ?
                    (

                        <EditEmployee
                        employee={employee}
                        setEmployee={setEmployee}

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

        {
                    showInput
                    ?
                    (

                    <Button variant="warning" onClick={changeBtn}>
                        Back
                    </Button>
                    )
                    :
                    (
                    <Button variant="warning" onClick={editemployee}>
                        Update 
                    </Button>
                    )
                }

            <Button variant="danger" onClick={deleteEmployee}>
                Delete
            </Button>

            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
    }else{
        return (
            <section>
                <Login />
            </section>
        )
    }
}
export default EmployeeTable