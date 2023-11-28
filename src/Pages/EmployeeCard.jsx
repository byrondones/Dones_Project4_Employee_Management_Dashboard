function EmployeeCard({employee}){
    return(
        <>
                <div className="container-fluid">
                    <div className="row m-0">
                        <div className="col-sm-3">
                            <h4 className='fw-bold'>Personal Information</h4>
                            <div className="m-3">
                            <p>
                                Last Name: <b>{`${employee.lastname}`}</b>
                            </p>
                            <p>
                                First Name: <b>{`${employee.firstname}`}</b>
                            </p>
                            <p>
                                Middle Name: <b>{`${employee.middlename}`}</b>
                            </p>
                            <p>
                                Suffix: <b>{`${employee.suffix}`}</b>
                            </p>
                            <p>
                                Gender: <b>{`${employee.gender}`}</b>
                            </p>
                            <p>
                                Birthday: <b>{`${employee.birthday}`}</b>
                            </p>
                        </div>
                            
                        <h4 className='pt-3 fw-bold'>Contact</h4>
                            <div className="m-3">
                                <p>
                                    Email: <b>{`${employee.email}`}</b>
                                </p>
                                <p>
                                    Cellphone: <b>{`${employee.phonenumber}`}</b>
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <h4 className='fw-bold'>Address</h4>
                            <div className="m-3">
                                <p>
                                    Address 1: <b>{`${employee.address1}`}</b>
                                </p>
                                <p>
                                    Address 2: <b>{`${employee.address2}`}</b>
                                </p>
                                <p>
                                    Street: <b>{`${employee.street}`}</b>
                                </p>
                                <p>
                                    Barangay: <b>{`${employee.barangay}`}</b>
                                </p>
                                <p>
                                    City: <b>{`${employee.city}`}</b>
                                </p>
                                <p>
                                    Province: <b>{`${employee.province}`}</b>
                                </p>
                                <p>
                                    Zip Code: <b>{`${employee.zipcode}`}</b>
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <h4 className='fw-bold'>Employment Information</h4>
                            <div className="m-3">
                                <p>
                                    Title: <b>{`${employee.title}`}</b>
                                </p>
                                <p>
                                    Department: <b>{`${employee.department}`}</b>
                                </p>
                                <p>
                                    Date of Hire: <b>{`${employee.dateofhire}`}</b>
                                </p>
                                <p>
                                    Active: <b>{`${employee.active}`}</b>
                                </p>
                                <p>
                                    Salary: <b>{`${employee.salary}`}</b>
                                </p>
                                <p>
                                    Status: <b>{`${employee.eStatus}`}</b>
                                </p>
                                <p>
                                    Role: <b>{`${employee.role}`}</b>
                                </p>
                                <p>
                                    Years of Contract: <b>{`${employee.yearsofcontract}`}</b>
                                </p>
                                <p>
                                    Work From Home: <b>{`${employee.wfh}`}</b>
                                </p>
                                <p>
                                    On-leave: <b>{`${employee.leave}`}</b>
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <h4 className='fw-bold'>Emergency Contact</h4>
                            <div className="m-3">
                                <p>
                                    Name: <b>{`${employee.emergencyName}`}</b>
                                </p>
                                <p>
                                    Cell Number: <b>{`${employee.emergencyCell}`}</b>
                                </p>
                                <p>
                                    Email: <b>{`${employee.emergencyEmail}`}</b>
                                </p>
                                <p>
                                    Relationship: <b>{`${employee.emergencyRelationship}`}</b>
                                </p>
                                <p>
                                    Address: <b>{`${employee.emergencyStreet}, ${employee.emergencyBarangay}, ${employee.emergencyCity}, ${employee.emergencyProvince}, ${employee.zipcode}`}</b>
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>

        </>
    )
}
export default EmployeeCard