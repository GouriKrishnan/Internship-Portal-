import React, { useState } from 'react';
import '../registration.css';
import '../reg.js';

import BannerBackground from "../Assets/home-banner-background.png";
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [exitExamMarks, setExitExamMarks] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignup = () => {
    // Check if all fields are filled
    if (!name || !email || !password || !phone || !exitExamMarks) {
      alert('Please fill in all the fields.');
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password complexity regex
    const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[\W_]).{8,}$/;

    // Phone number validation regex (10 digits)
    const phoneRegex = /^\d{10}$/;

    // Validate email
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      alert(
        'Password must contain at least one digit, one uppercase letter, one lowercase letter, one special symbol, and be at least 8 characters long.'
      );
      return;
    }

    // Validate phone number
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    // Validate exit exam marks
    const passMarks = 40;
    if (parseInt(exitExamMarks, 10) < passMarks) {
      alert('You must secure pass marks in the exit exam to register.');
      return;
    }

    // Registration successful
    setIsRegistered(true);
  };

  return (
    <div class="regdesign">
        <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="Banner Background"/>
        </div>
    <div class="materialContainer">


    <div class="box">
 
       <div class="title">LOGIN</div>
 
       <div class="input">
          <label for="name">Username</label>
          <input type="text" name="name" id="name"></input>
          <span class="spin"></span>
       </div>
 
       <div class="input">
          <label for="pass">Password</label>
          <input type="password" name="pass" id="pass"></input>
          <span class="spin"></span>
       </div>
 
       <div class="button login">
          <button><span>GO</span> <i class="fa fa-check"></i></button>
       </div>
       </div>
 
 
 
    </div>
 
 </div>
  );
};

export default Signup;