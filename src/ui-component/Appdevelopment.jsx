import React from 'react';
import { Link } from 'react-router-dom';
import './Appdevelopment.css';
import AppDevelopmentImage from '../Assets/orange theme.jpg'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'; 

const Appdevelopment = () => {

  const handleRegisterClick = () => {
    // Add Register button click
    console.log('Register button clicked');
  };
   return (
    <div className="appdev">

<Link to="/Studentdash" className="back-button">Back</Link> {/*Add this line for the back button */}
       
        {/* Image with text overlay */}
        <div className="image-container-app">
          <img src={AppDevelopmentImage} alt="App Development Project" className="project-image-app" />
          <div className="image-overlay-app">
          <div className="image-text-app">
          <h2>Mobile App Development Project</h2>
          <br></br>
          <h1>Master Cross-Platform Mobile App Development with .NET MAUI: Build Real-World Apps for Android, iOS, and Windows</h1>
        </div>

        {/* Register Now button */}
        <div className="register-button-container-app">
          <button className="register-button-app" onClick={handleRegisterClick}>
            Register Now
          </button>
        </div>
      </div>
      </div>
         <br></br>

      <div className="content-box-app">
          <section id='title' className='py-md-5'>
            {/* <div className="title-box"> */}
              <h2 className='my-5 text-center'>What you'll learn</h2>
            {/* </div> */}
            <div className='learning-box-app'>
              <ul className='learning-list-app'>
                <li> * Build beautiful, fast and native-quality apps with .NET MAUI</li>
                <li> * Build iOS and Android apps using just one programming language (C#)</li>
                <li> * Learn how to use the Hierarchical Navigation and implement modal pages</li>
                <li> * Create News Application from scratch</li>
                <li> * Work with different kind of layouts</li>
                <li> * Create Darbuka Music Instrument App</li>
                <li> * Create Kids Learning App</li>
                <li> * Understand all the fundamental concepts of .NET MAUI App development</li>
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
              <Accordion.Header>Introduction to Mobile App Development</Accordion.Header>
                 <Accordion.Body>
                 Welcome to the First Real World App Development course with .NET MAUI. In this comprehensive course, you will learn everything you need to know about building beautiful Android and iOS apps using .NET MAUI.

                 Our course covers all the fundamentals of .NET MAUI, including Layouts & Controls, Hierarchical Navigation, Model pages, List View, Collection View, Shell and much more.
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

export default Appdevelopment;

