import React, { useState } from 'react';
import axios from 'axios';
import '../registration.css';
import '../reg.js';
//import Studentdash from './ui-component/Studentdash';
import BannerBackground from "../Assets/home-banner-background.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Loginn = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password,
      });
  
      const data = response.data;
  
      if (data.success) {
        alert('User logged in successfully:');
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  
  return (
    <div className="regdesign">
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="Banner Background" />
      </div>
      <div className="materialContainer">
        <div className="box">
          <div className="title">LOGIN</div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
            />
            <span className="spin"></span>
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
            />
            <span className="spin"></span>
          </div>
          <div className="button login">
            <button onClick={Loginn}>
              <span>GO</span> <i className="fa fa-check"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
