import React, { useState } from 'react';

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
    <div>
      {isRegistered ? (
        <div>
          <p>Registration successful! Welcome, {name}!</p>
          {/* Add any additional content for registered users */}
        </div>
      ) : (
        <div>
          <h2>Signup</h2>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <br />
          <label>
            Exit Exam Marks:
            <input
              type="number"
              value={exitExamMarks}
              onChange={(e) => setExitExamMarks(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleSignup}>Signup</button>
        </div>
      )}
    </div>
  );
};

export default Signup;