import {Link, useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebaseConfig";
import { useState } from 'react';



function Login(){
    return(
        <div className="row" style={{height:790}}>
            <div className="container border p-5 rounded my-auto">
                <div className="col-sm-6">
                <h1 className="fw-bold">Login</h1>
                    <p>Enter your email and password to login.</p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="form-control" />
                    <label htmlFor="password" className="mt-3">Password</label>
                    <input id="password" type="password" className="form-control" />
                    <button className="btn btn-dark mt-3">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Login