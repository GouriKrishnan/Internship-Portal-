import React, { useState } from 'react';
import '../style3.css';

import BannerBackground from "../Assets/home-banner-background.png";
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [exitExamMarks, setExitExamMarks] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignup = async () => {
    // ... (existing validation checks)
  
  {
      const response = await fetch('http://localhost3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          exitExamMarks,
        }),
      });
    }
     
  };
  

  return (
    <div class="regdesign">
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="Banner Background" />
      </div>
      <div>
        {isRegistered ? (
          <div>
            <p>Registration successful! Welcome, {name}!</p>
            {/* Add any additional content for registered users */}
          </div>
        ) : (
          <div>
            <div class="materialContainer">

              <div class="box1">
                <div class="title">Signup</div>

                <label class="input">
                  Name:
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label class="input">
                  Email:
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label class="input">
                  Password:
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <label class="input">
                  Phone Number:
                  <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <br />
                <label class="input">
                  Exit Exam Marks:
                  <input type="number" value={exitExamMarks} onChange={(e) => setExitExamMarks(e.target.value)} />
                </label>

                <div class="button login">
                  <button onClick={handleSignup}><span>Signup</span> <i class="fa fa-check"></i></button>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
