import React from 'react';
 import { Link } from 'react-router-dom';
 import './Webdevelopment.css';
 import WebDevelopmentImage from '../Assets/orange theme.jpg'
 import Accordion from 'react-bootstrap/Accordion';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import ListGroup from 'react-bootstrap/ListGroup';
 

 const Webdevelopment = () => {

  const handleRegisterClick = () => {
    // Add Register button click
    console.log('Register button clicked');
  };

   return (
    <div className="webdev">


       <Link to="/Studentdash" className="back-button">Back</Link> {/*Add this line for the back button */}
        {/* Image with text overlay */}
        <div className="image-container">
          <img src={WebDevelopmentImage} alt="Web Development Project" className="project-image-a" />
          <div className="image-overlay">
          <div className="image-text">
          <h2>Certified Web Development Project</h2>
          <br></br>
          <h1>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.</h1>
        </div>

        {/* Register Now button */}
        <div className="register-button-container">
        <button to="/RegistrationForm" className="register-button" onClick={handleRegisterClick}>
            Register Now
          </button>
        </div>
      </div>
      </div>
         <br></br>

      <div className="content-box">
          <section id='title' className='py-md-5'>
            {/* <div className="title-box"> */}
              <h2 className='my-5 text-center'>What you'll learn</h2>
            {/* </div> */}
            <div className='learning-box'>
              <ul className='learning-list'>
                <li> * Build web development projects for your portfolio, ready to apply for junior developer jobs.</li>
                <li> * Learn the latest technologies, including Javascript, React, Node, and even Web3 development.</li>
                <li> * After the course, you will be able to build ANY website you want.</li>
                <li> * Build fully-fledged websites and web apps for your startup or business.</li>
                <li> * Work as a freelance web developer.</li>
                <li> * Master frontend development with React.</li>
                <li> * Master backend development with Node.</li>
                <li> * Learn professional developer best practices.</li>
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
              <Accordion.Header>Introduction to Web Development</Accordion.Header>
                 <Accordion.Body>
                 Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of ICTAK! 

                 At 62+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="item" >
              <Accordion.Header>Project Overview Document</Accordion.Header>
                 <Accordion.Body>
                             Project Overview Document
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="item" >
              <Accordion.Header>Reference Materials</Accordion.Header>
                 <Accordion.Body>
                             Reference Materials
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="item" >
              <Accordion.Header>Weekly Submission and Submission Link</Accordion.Header>
                 <Accordion.Body>
                             Weekly Submission and Submission Link
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="item" >
              <Accordion.Header>Final Project Report Submission</Accordion.Header>
                 <Accordion.Body>
                             Final Project Report Submission
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="item" >
              <Accordion.Header>Viva Voce Format</Accordion.Header>
                 <Accordion.Body>
                             Viva Voce Format
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="item" >
              <Accordion.Header>Discussion Forum</Accordion.Header>
                 <Accordion.Body>
                              Discussion Forum
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className="item" >
              <Accordion.Header>Score System</Accordion.Header>
                 <Accordion.Body>
                            Score System
                 </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </section>
        </div>
</div>
  
    );
  };

export default Webdevelopment;

