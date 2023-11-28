import { Button } from "react-bootstrap"
function Employee({updateemployee,employeeID,lastname, firstname, middlename, phonenumber, email, title, department, eStatus, salary, leave, active,
suffix, gender, birthday, address1, address2, street, barangay, city,
province, zipcode, dateofhire, role, yearsofcontract, wfh,
emergencyName, emergencyCell, emergencyEmail, emergencyRelationship,emergencyStreet, emergencyBarangay, emergencyCity, emergencyProvince,
emergencyZipcode}){


    return(
        <>
            <tr className="text-center" style={{cursor:'pointer'}} onClick={()=>updateemployee(employeeID, lastname, firstname, middlename,
            suffix, gender, birthday, email, phonenumber, address1, address2, street, barangay, city,
            province, zipcode, title, department, dateofhire, active, salary, eStatus, role, yearsofcontract, wfh, leave,
            emergencyName, emergencyCell, emergencyEmail, emergencyRelationship,emergencyStreet, emergencyBarangay, emergencyCity, emergencyProvince,
            emergencyZipcode)}>
                <td>
                    {lastname}
                </td>
                <td>
                    {firstname}
                </td>
                <td>
                    {middlename}
                </td>
                <td>
                    {phonenumber}
                </td>
                <td>
                    {email}
                </td>
                <td>
                    {title}
                </td>
                <td>
                    {department}
                </td>
                <td>
                    {eStatus}
                </td>
                <td>
                    {salary}
                </td>
                <td>
                    {leave}
                </td>
                <td>
                    {active}
                </td>

            </tr>
        </>
    )
}

export default Employee