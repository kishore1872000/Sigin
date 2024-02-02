import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch("http://localhost:8080/api/v1/employee/login", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });
          const data = await response.json();
          // Assuming the backend responds with a success message or user data
          if (!(response.status)) { 
            console.error('Email failed:', data);
             
          } else if(response.status){
            navigate('/Nextpage');             
          }
          else{
            console.error('Login failed:', data.error);
          }
      } catch (error) {
          console.error('Error during login:', error);
      }
  };

    return (
        <div className='main_container'>
            <div className='header'>
                <h2>Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <input type='text' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="box">
                    <input type={showPassword ? "text" : "password"} value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => {
                        setShowPassword(prev => !prev);
                    }}
                />
                <p>Don't have an account? <Link to="/">Sign up</Link></p>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;

