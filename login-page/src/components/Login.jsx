import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom"

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (email === "" || password === "") {
    alert("Please enter Email and Password");
    return;   // stop here, don’t navigate
  }
        console.log(email,password);
        navigate("/Home");

    }
    return(
        <div className="container">
        <form  className="form"onSubmit={handleSubmit}>
            <h2 className="login">Login</h2>
            <div className="email">
               
                <input 
            
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="password">
                
                 <input

            type="password"
            placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}
            />
            </div>
           
            <button type="submit">Login</button>
        </form>
        </div>
    )
}
export default Login;