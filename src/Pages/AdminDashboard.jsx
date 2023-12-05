import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import firebaseApp from "../firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function AdminDashboard(){

    const [authenticated, setAuthenticated] = useState(false)
    let navigate = useNavigate();

    useEffect(()=>{

        const auth = getAuth(firebaseApp);
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user.email);
            setAuthenticated(true)
            const uid = user.uid;
            } else {
              // User is signed out
              // ...
            }
        });

    }, [])

    const logout = () => {
        const auth = getAuth(firebaseApp);
        signOut(auth).then(() => {
            setAuthenticated(false)
            navigate("/login");
        }).catch((error) => {
        // An error happened.
        });
    }

    return(
        <>
            {
                authenticated
                ?
                <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid justify-content-start">
                    {
                        authenticated
                        ?
                        <Link to="employeelist" className="text-decoration-none text-white me-5">
                            Employee List
                        </Link>
                        :
                        null
                    }
    
                    {
                        authenticated
                        ?
                        <Link to="addemployee" className="text-decoration-none text-white me-5">
                            Add Employee
                        </Link>
                        :
                        null
                    }
                    
    
                </div>
    
                    <div className="justify-content-end">
                    {
                            authenticated
                            ?
                            <Link to="login" className="text-decoration-none text-white me-5" onClick={logout}>
                                Logout
                            </Link>
                            :
                            null
                        }
                    </div>
                </nav>
                :
                null
            }

        <div className="m-5">
            <Outlet>

            </Outlet>
        </div>
        </>
    )
}
export default AdminDashboard
