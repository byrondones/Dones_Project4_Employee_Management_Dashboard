import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const SeeEmployee = () => {
        if(employee.lastname === '')
        {
            alert("Missing fields!");
        }else{
            setShow(true);
        }
    }

    const AddEmployeeInfo = () => {
        const db = getFirestore(firebaseApp);
        setEmployeeList(
            employeeList => [
                ...employeeList, employee
            ]
        );

        addDoc(collection(db, 'employeerecords'), employee);
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
                emergencyRelationship: '',
            })

    setShow(false)
    }

    return(
        <>
        <h1 className="text-center pb-4 fw-bold">ADD EMPLOYEE</h1>
        <hr />
        {/* Form */}
            <div className="container">
                <h3 className="mt-5 mb-3">Personal Information</h3>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-3">
                                <label htmlFor="lastname" className="form-label fw-medium">Last Name</label>
                                <input type="text" id="lastname" placeholder="Doe" className="form-control"
                                onChange={
                                    (e)=>setEmployee({
                                        ...employee,
                                        lastname: e.target.value,
                                    })}
                                value={employee.lastname}
                                />
                            </div>

                            <div className="col-sm-3">
                                <label htmlFor="firstname" className="form-label fw-medium">First Name</label>
                                <input type="text" id="firstname" placeholder="John" className="form-control"
                                onChange={
                                    (e)=>setEmployee({
                                        ...employee,
                                        firstname: e.target.value,
                                    })}
                                value={employee.firstname}
                                />
                            </div>

                            <div className="col-sm-3">
                                <label htmlFor="middlename" className="form-label fw-medium">Middle Name</label>
                                <input type="text" id="middlename" placeholder="F" className="form-control"
                                onChange={
                                    (e)=>setEmployee({
                                        ...employee,
                                        middlename: e.target.value,
                                    })}
                                value={employee.middlename}
                                
                                />
                            </div>
                            
                            <div className="col-sm-1">
                                <label htmlFor="suffix" className="form-label fw-medium">Suffix</label>
                                <select className="form-select" id="suffix"
                                onChange={
                                    (e)=>setEmployee({
                                        ...employee,
                                        suffix: e.target.value,
                                    })}
                                value={employee.suffix}
                                >
                                    <option selected></option>
                                    <option value="Sr.">Sr.</option>
                                    <option value="Jr.">Jr.</option>
                                    <option value="III">III</option>
                                </select>
                            </div>
                    </div>

                <div className="row mt-2">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-1">
                        <label htmlFor="gender" className="form-label fw-medium">Gender</label>
                            <select className="form-select" id="gender"
                            onChange={
                                (e)=>setEmployee({
                                    ...employee,
                                    gender: e.target.value,
                                })}
                            value={employee.gender}
                            
                            >
                                <option selected></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="birthday" className="form-label fw-medium">Birthday</label>
                        <input type="date" id="birthday" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                birthday: e.target.value,
                            })}
                        value={employee.birthday}
                        
                        />
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="email" className="form-label fw-medium">Email</label>
                        <input type="email" id="email" placeholder="John@Doe.com" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                email: e.target.value,
                            })}
                        value={employee.email}
                        />
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="phonenumber" className="form-label fw-medium">Phone Number</label>
                        <input type="number" id="phonenumber" placeholder="+63 123 456 7890" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                phonenumber: e.target.value,
                            })}
                        value={employee.phonenumber}
                        />
                    </div>
                    
                </div>

            <div className="row mt-2">
                <h3 className="mb-3 mt-3">Address</h3>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                        <label htmlFor="address1" className="form-label fw-medium">Address Line 1</label>
                        <input type="text" id="address1"  className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                address1: e.target.value,
                            })}
                        value={employee.address1}
                        />
                    </div>

                    <div className="col-sm-5">
                        <label htmlFor="address2" className="form-label fw-medium">Address Line 2</label>
                        <input type="text" id="address2" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                address2: e.target.value,
                            })}
                        value={employee.address2}
                        />
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                        <label htmlFor="street" className="form-label fw-medium">Street</label>
                        <input type="text" id="street" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                street: e.target.value,
                            })}
                        value={employee.street}
                        />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="barangay" className="form-label fw-medium">Barangay</label>
                        <input type="text" id="barangay" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                barangay: e.target.value,
                            })}
                        value={employee.barangay}
                        />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="city" className="form-label fw-medium">City</label>
                        <input type="text" id="city" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                city: e.target.value,
                            })}
                        value={employee.city}
                        />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="province" className="form-label fw-medium">Province</label>
                        <input type="text" id="province" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                province: e.target.value,
                            })}
                        value={employee.province}
                        />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="zipcode" className="form-label fw-medium">Zip Code</label>
                        <input type="number" id="zipcode" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                zipcode: e.target.value,
                            })}
                        value={employee.zipcode}
                        />
                    </div>
                </div>

                    <div className="row">
                    <h3 className="mb-3 mt-5">Employment Information</h3>
                    <div className="col-sm-1"></div>
                            <div className="col-sm-2">
                            <label htmlFor="role" className="form-label fw-medium">Employee Role</label>
                                <select className="form-select" id="role"
                                onChange={
                                    (e)=>setEmployee({
                                        ...employee,
                                        role: e.target.value,
                                    })}
                                value={employee.role}
                                >
                                    <option selected></option>
                                    <option value="Staff">Staff</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>

                            <div className="col-sm-2">
                                <label htmlFor="title" className="form-label fw-medium">Job Title</label>
                                <input type="text" id="title" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                title: e.target.value,
                            })}
                        value={employee.title}
                                />
                            </div>

                            <div className="col-sm-2">
                                <label htmlFor="department" className="form-label fw-medium">Department</label>
                                <input type="text" id="department" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                department: e.target.value,
                            })}
                        value={employee.department}
                                />
                            </div>

                            <div className="col-sm-2">
                                <label htmlFor="dateofhire" className="form-label fw-medium">Date of Hire</label>
                                <input type="date" id="dateofhire" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                dateofhire: e.target.value,
                            })}
                        value={employee.dateofhire}
                                />
                            </div>
                            <div className="col-sm-2">
                            <label htmlFor="active" className="form-label fw-medium">Active</label>
                            <select className="form-select" id="active"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                active: e.target.value,
                            })}
                        value={employee.active}
                            >
                                <option selected></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            </div>
                        </div>

                        <div className="row mt-2">
                        <div className="col-sm-1"></div>
                            <div className="col-sm-5">
                                <label htmlFor="salary" className="form-label fw-medium">Salary (₱)</label>
                                <input type="number" id="salary" className="form-control" 
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                salary: e.target.value,
                            })}
                        value={employee.salary}
                                />
                            </div>

                            <div className="col-sm-5">
                                <label htmlFor="salary" className="form-label fw-medium">On Leave</label>
                                <select className="form-select" id="leave"
                                onChange={
                                    (e)=>setEmployee({
                                        ...employee,
                                        leave: e.target.value,
                                    })}
                                value={employee.leave}
                                >
                                    <option selected></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                        </div>
                    </div>

                        <div className="row mt-2">
                        <div className="col-sm-1"></div>
                            <div className="col-sm-4">
                                <label htmlFor="status" className="form-label fw-medium">Employment Status</label>
                                <select className="form-select" id="status"
                                onChange={
                                    (e)=>setEmployee({
                                        ...employee,
                                        eStatus: e.target.value,
                                    })}
                                value={employee.eStatus}
                                >
                                    <option selected></option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Intern">Intern</option>
                                </select>
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="yearsofcontract" className="form-label fw-medium">Years of Contract</label>
                                <input type="text" id="yearsofcontract" className="form-control" 
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                yearsofcontract: e.target.value,
                            })}
                        value={employee.yearsofcontract}
                                />
                            </div>
                            <div className="col-sm-2">
                            <label htmlFor="Wfh" className="form-label fw-medium">Work From Home</label>
                            <select className="form-select" id="Wfh"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                wfh: e.target.value,
                            })}
                        value={employee.wfh}
                            >
                                <option selected></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            </div>
                        </div>

                    <div className="row">
                    <h3 className="mb-3 mt-5">Emergenct Contact Information</h3>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <label htmlFor="emergencyName" className="form-label fw-medium">Full Name</label>
                        <input type="text" id="emergencyName" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                emergencyName: e.target.value,
                            })}
                        value={employee.emergencyName}
                        />
                    </div>
                    </div>

                <div className="row mt-2">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                        <label htmlFor="emergencyEmail" className="form-label fw-medium">Email</label>
                        <input type="email" id="emergencyEmail" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                emergencyEmail: e.target.value,
                            })}
                        value={employee.emergencyEmail}
                        />
                    </div>

                    <div className="col-sm-5">
                        <label htmlFor="emergencyCell" className="form-label fw-medium">Cellphone Number</label>
                        <input type="text" id="emergencyCell" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                emergencyCell: e.target.value,
                            })}
                        value={employee.emergencyCell}
                        />
                    </div>
                </div>

                    <div className="row mt-2">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2">
                        <label htmlFor="emergencyStreet" className="form-label fw-medium">Street</label>
                        <input type="text" id="emergencyStreet" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                emergencyStreet: e.target.value,
                            })}
                        value={employee.emergencyStreet}
                        />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="emergencyBarangay" className="form-label fw-medium">Barangay</label>
                        <input type="text" id="emergencyBarangay" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                emergencyBarangay: e.target.value,
                            })}
                        value={employee.emergencyBarangay}
                        />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="emergencyCity" className="form-label fw-medium">City</label>
                        <input type="text" id="emergencyCity" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                emergencyCity: e.target.value,
                            })}
                        value={employee.emergencyCity}
                        />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="emergencyProvince" className="form-label fw-medium">Province</label>
                        <input type="text" id="emergencyProvince" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                emergencyProvince: e.target.value,
                            })}
                        value={employee.emergencyProvince}
                        />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="emergencyZipcode" className="form-label fw-medium">Postal Code</label>
                        <input type="text" id="emergencyZipcode" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                emergencyZipcode: e.target.value,
                            })}
                        value={employee.emergencyZipcode}
                        />
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <label htmlFor="emergencyRelationship" className="form-label fw-medium">Relationship</label>
                        <input type="text" id="emergencyRelationship" className="form-control"
                        onChange={
                            (e)=>setEmployee({
                                ...employee,
                                emergencyRelationship: e.target.value,
                            })}
                        value={employee.emergencyRelationship}
                        />
                    </div>
                </div>
                <button className="mt-5 btn btn-dark d-block col-sm-10 mx-auto" onClick={SeeEmployee}>Submit</button>
            </div>

        {/* Modal */}
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h3>Personal information</h3>
                <p>
                    <b>Full Name:</b>        
                    
                    <br /> {`${employee.firstname} ${employee.middlename} ${employee.lastname}` }

                </p>

                <p>
                    <b>Address</b> <br />
                    Address 1: {`${employee.address1}`} <br />
                    Address 2: {`${employee.address2}`} <br />
                    Street: {`${employee.street}`} <br />
                    Barangay: {`${employee.barangay}`} <br />
                    City: {`${employee.city}`} <br />
                    Province: {`${employee.province}`} <br />
                    Zip Code: {`${employee.postal}`} <br />
                </p>

                <p>
                    <b>Employment Status</b> <br />
                    Title: {`${employee.title}`} <br />
                    Department: {`${employee.department}`} <br />
                    Date of Hire: {`${employee.dateofhire}`} <br />
                    Active: {`${employee.active}`} <br />
                    Salary (₱): {`${employee.salary}`} <br />
                    Status: {`${employee.status}`} <br />
                    Years of Contract: {`${employee.yearsofcontract}`} <br />
                    Work From Home: {`${employee.wfh}`} <br />
                    On-leave: {`${employee.leave}`} <br />
                </p>

                <p>
                    <b>Emergency Contact</b> <br />
                    Full Name: {`${employee.emergencyName} `} <br />
                    Email: {`${employee.emergencyEmail}`} <br />
                    Cellphone: {` ${employee.emergencyCell}`} <br />
                    Address: {`${employee.emergencyStreet} ${employee.emergencyBarangay} ${employee.emergencyCity}, ${employee.emergencyProvince} ${employee.emergencyPostal}`} <br /> 
                    Relationship: {`${employee.emergencyRelationship}`} <br />
                </p>
            </Modal.Body>

            <Modal.Footer>

                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

                <Button variant="success" onClick={AddEmployeeInfo}>
                    Save Changes
                </Button>

            </Modal.Footer>
        </Modal>

        {/* Toast */}

        </>
    )
}
export default AddEmployee 