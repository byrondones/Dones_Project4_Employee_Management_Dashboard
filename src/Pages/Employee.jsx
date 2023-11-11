function Employee({employeeid,lastname, firstname, email, title, account, signedin}){
    return(
        <>
                <td>
                    {employeeid}
                </td>
                <td>
                    {lastname}
                </td>
                <td>
                    {firstname}
                </td>
                <td>
                    {email}
                </td>
                <td>
                    {title}
                </td>
                <td>
                    {account}
                </td>
                <td>
                    {signedin}
                </td>
        </>
    )
}

export default Employee