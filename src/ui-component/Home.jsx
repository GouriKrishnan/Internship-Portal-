import React from "react";
import { Link } from "react-router-dom";
import '../style1.css';

const Home = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="Work">About</Link></li>
          <li><Link to="">Internship</Link></li>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/">Signup</Link></li>
        </ul>
        <h1 className="logo">Internship Portal</h1>
      </div>
    </nav>
  );
};

export default Home;