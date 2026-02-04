import React from 'react'
import {useNavigate} from "react-router-dom"
function Home(){
    const navigate= useNavigate();
    const handleLogout=(e)=>{
        navigate("/");

    }
    return(
        
        <div className="home-container">
         <h1 className="home"> Welcome to Home Page</h1>
         <button id="logout-btn"onClick={handleLogout}>Logout</button>
        </div>
        
        
        
    );
}
export default Home;