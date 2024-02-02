import React, { useState } from 'react';
import './sign.css';
import { Link } from 'react-router-dom';
import axios from "axios";
function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/employee/save", {
      employeename: name,
      email: email,
      password: pass,
      });
      alert("Employee Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }

  
  return (
    <>
      <div className='main_container'>
        <div className='header'>
          <h2>signup</h2>
        </div>
        <div className='box'>
          <input
            type='text'
            value={name}
            placeholder='Username'
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className='box'>
          <input
            type='text'
            value={email}
            placeholder='E-mail'
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className='box'>
          <input
            type='text'
            value={pass}
            placeholder='Password'
            onChange={(e) => setPass(e.target.value)}
          ></input>
        </div>
        <p>
          Already have an Account<Link to='/login'>Login NOW </Link>
        </p>
       <button onClick={save}>SIGN up</button>
      </div>
    </>
  );
}

export default Signup;
