import {Link, useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebaseConfig";
import { useState } from 'react';
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
        <div className="row">
            <div className="container border p-5 rounded my-auto">
                <div className="col-sm-12">
                <h1 className="fw-bold">Login</h1>
                    <p>Enter your email and password to login.</p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <label htmlFor="password" className="mt-3">Password</label>
                    <input id="password" type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    <button className="btn btn-dark mt-3" onClick={()=>handleLogin()}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default Login