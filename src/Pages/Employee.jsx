function Employee({updateemployee,employeeID,lastname, firstname, middlename, phonenumber, email, title, department, eStatus, salary, leave, active}){
    return(
        <>
            <tr className="text-center" hover style={{cursor:'pointer'}} onClick={()=>updateemployee(employeeID,lastname, firstname, middlename, phonenumber, email, title, department, eStatus, salary, leave, active)}>
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