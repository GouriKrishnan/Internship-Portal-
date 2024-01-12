import React from 'react';
import { Link } from 'react-router-dom';
import './MobileApp.css';
import MobileAppImage from '../Assets/orange theme.jpg';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

 
 const MobileApp = () => {

  const handleRegisterClick = () => {
    // Add your logic for the Register button click
    console.log('Register button clicked');
  };
   return (
    <div className="mobdev">

<Link to="/Studentdash" className="back-button">Back</Link> {/*Add this line for the back button */}
       
        {/* Image with text overlay */}
        <div className="image-container-mob">
          <img src={MobileAppImage} alt="Mobile Security App Project" className="project-image-mob" />
          <div className="image-overlay-mob">
          <div className="image-text-mob">
          <h2>Mobile Application Security and Penetration Testing</h2>
          <br></br>
          <h1>Learn the security issues in mobile applications & devices and penetration testing along with their solutions.</h1>
        </div>

        {/* Register Now button */}
        <div className="register-button-container-mob">
          <button className="register-button-mob" onClick={handleRegisterClick}>
            Register Now
          </button>
        </div>
      </div>
      </div>
         <br></br>

      <div className="content-box-mob">
          <section id='title' className='py-md-5'>
            {/* <div className="title-box"> */}
              <h2 className='my-5 text-center'>What you'll learn</h2>
            {/* </div> */}
            <div className='learning-box-mob'>
              <ul className='learning-list-mob'>
                <li> * DIVA (Damn Insecure and Vulnerable App) to learn the flaws in Android application due to insecure coding practices</li>
                <li> * Performing end to end mobile application security testing through MobSF (Mobile Security Framework)</li>
                <li> * Scanning security vulnerabilities in Android applications using Drozer</li>
                <li> * Input Validation and Access Control Issues</li>
                <li> * Searching Android application security vulnerabilities through QARK (Quick Android Review Kit)</li>
              </ul>
            </div>
          </section>
          </div>
             <br></br>

             <div className="content-box-a">
          <section id='title' className='py-md-5'>
            <div>
              <h2>This Course Includes</h2>
            </div>
      <ListGroup>
      <ListGroup.Item>On-demand video</ListGroup.Item>
      <ListGroup.Item>Coding exercises</ListGroup.Item>
      <ListGroup.Item>Articles</ListGroup.Item>
      <ListGroup.Item>Downloadable resources</ListGroup.Item>
      <ListGroup.Item>Access on mobile and TV</ListGroup.Item>
      <ListGroup.Item>Certificate of completion</ListGroup.Item>
      </ListGroup>
          </section>
          </div>
            <br></br>  

          <div className='content-docs'>
            <section id='title' className='py-md-5'>
          <div>
            <h2>Course Content</h2>
            </div>
       <Accordion defaultActiveKey={0} className="mt-5 p-3">
           <Accordion.Item eventKey="0" className="item" >
              <Accordion.Header>Introduction to Mobile Application Security </Accordion.Header>
                 <Accordion.Body>
                 In this Mobile Application Security Course, you will learn most of the important tools and techniques used to test the security of your Mobile Devices and Applications. This course will begin by introducing Basics of Penetration Testing, Mobile Application Security, Android Architecture, Android Debug Bridge (ADB), Decompiling and reversing APK.

                 Also, you will learn to identify security flaws and the techniques to safeguard your mobile device from them using tools such as DIVA, MobSF, QARK, and Drozer.
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="item" >
              <Accordion.Header>Project Overview Document</Accordion.Header>
                 <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="item" >
              <Accordion.Header>Reference Materials</Accordion.Header>
                 <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="item" >
              <Accordion.Header>Weekly Submission and Submission Link</Accordion.Header>
                 <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="item" >
              <Accordion.Header>Final Project Report Submission</Accordion.Header>
                 <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="item" >
              <Accordion.Header>Viva Voce Format</Accordion.Header>
                 <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="item" >
              <Accordion.Header>Discussion Forum</Accordion.Header>
                 <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className="item" >
              <Accordion.Header>Score System</Accordion.Header>
                 <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </section>
        </div>
      </div>
    );
  };

export default MobileApp;

