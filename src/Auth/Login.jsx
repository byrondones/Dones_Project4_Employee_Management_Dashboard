import {Link, useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebaseConfig";
import { useState } from 'react';
import '../Auth/Login.css'
function Login(){

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleLogin = () => {

        if (email !== '' && password !== '') {
            const auth = getAuth(firebaseApp);
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/employeelist");
            // ...
            })
            .catch((error) => {
            alert(error);
            });
        }else{
            alert("Incorrect or missing credentials!")
        }
        
    }
    return(
        <div className="container">
                <div className="row" style={{height:750}}>
                    <div className="col-sm-4 mx-auto my-auto">
                        <img src="/src/images/1.png" alt="" className='img-fluid'/>
                    </div>

                    <div className="col-sm-6 my-auto">
                        <h1 className="fw-bold">EMPLOYEE RECORDS</h1>
                        <p>Enter your email and password to login.</p>
                        <label htmlFor="email" className='fw-bold'>Email</label>
                        <input id="email" type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        <label htmlFor="password" className="mt-3 fw-bold">Password</label>
                        <input id="password" type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        <button className="btn mt-3 text-white form-control bg-dark" onClick={()=>handleLogin()}>Login</button>

                    </div>
                </div>
            </div>
    )
}
export default Login