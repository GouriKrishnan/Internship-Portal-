import React from 'react';
import { Link } from 'react-router-dom';
import './Machinelearning.css';
import MachinelearningImage from '../Assets/orange theme.jpg';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
 
 const Machinelearning = () => {

  const handleRegisterClick = () => {
    // Add Register button click
    console.log('Register button clicked');
  };
   return (
    <div className="mechdev">

<Link to="/Studentdash" className="back-button">Back</Link> {/*Add this line for the back button */}
       
        {/* Image with text overlay */}
        <div className="image-container-m">
          <img src={MachinelearningImage} alt="Machine Learning Project" className="project-image-m" />
          <div className="image-overlay-m">
          <div className="image-text-m">
          <h2>Machine Learning with Javascript</h2>
          <br></br>
          <h1>Master Machine Learning from scratch using Javascript and TensorflowJS with hands-on projects.</h1>
        </div>

        {/* Register Now button */}
        <div className="register-button-container-m">
          <button className="register-button-m" onClick={handleRegisterClick}>
            Register Now
          </button>
        </div>
      </div>
      </div>
         <br></br>

      <div className="content-box-m">
          <section id='title' className='py-md-5'>
            {/* <div className="title-box"> */}
              <h2 className='my-5 text-center'>What you'll learn</h2>
            {/* </div> */}
            <div className='learning-box-m'>
              <ul className='learning-list-m'>
                <li> * Assemble machine learning algorithms from scratch!</li>
                <li> * Build interesting applications using Javascript and ML techniques</li>
                <li> * Understand how ML works without relying on mysterious libraries</li>
                <li> * Optimize your algorithms with advanced performance and memory usage profiling</li>
                <li> * Use the low-level features of Tensorflow JS to supercharge your algorithms</li>
                <li> * Grow a strong intuition of ML best practices</li>
                
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
              <Accordion.Header>Introduction to Machine Learning</Accordion.Header>
                 <Accordion.Body>
                 If you're here, you already know the truth: Machine Learning is the future of everything.

                 In the coming years, there won't be a single industry in the world untouched by Machine Learning.  A transformative force, you can either choose to understand it now, or lose out on a wave of incredible change.  You probably already use apps many times each day that rely upon Machine Learning techniques. 
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

export default Machinelearning;

