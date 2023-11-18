import { Outlet, Link } from "react-router-dom";

function AdminDashboard(){

    return(
        <>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container justify-content-center">
                    <Link to="employeelist" className="text-decoration-none text-white me-5">
                        Employee List
                    </Link>

                    <Link to="addemployee" className="text-decoration-none text-white me-5">
                        Add Employee
                    </Link>
                </div>
            </nav>

        <div className="m-5">
            <Outlet>

            </Outlet>
        </div>
        </>
    )
}
export default AdminDashboard
