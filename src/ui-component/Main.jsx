import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.PNG";
import Home from "./Home";
import Work from "./Work";
import { Link } from "react-router-dom";
//import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import '../style2.css';

const Main = () => {
  return (
    <div className="home-container">
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="Banner Background"/>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Build your Career with ICTAK
          </h1>
          <p className="primary-text">
            Your Knowledge is just  an Click Away.
          </p>
          <br></br>
          <button className="secondary-button">
          <Link to="</Login>"> Get Started </Link><FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner Image" />
        </div>
      </div>
      <Work />
    </div>
  );
};

export default Main;
