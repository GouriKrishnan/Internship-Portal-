import React from 'react';
import { Link } from 'react-router-dom';
import './Ecommerce.css';
import EcommerceImage from '../Assets/orange theme.jpg'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

 const Ecommerce = () => {

  const handleRegisterClick = () => {
    // Add your logic for the Register button click
    console.log('Register button clicked');
  };
   return (
    <div className="ecodev">

<Link to="/Studentdash" className="back-button">Back</Link> {/*Add this line for the back button */}
       
        {/* Image with text overlay */}
        <div className="image-container-e">
          <img src={EcommerceImage} alt="E-commerce Website Development  Project" className="project-image-e" />
          <div className="image-overlay-e">
          <div className="image-text-e">
          <h2>E-commerce Web Development Project</h2>
          <br></br>
          <h1>Build a full-fledged e-commerce website with product listings, shopping cart, and payment integration</h1>
        </div>

        {/* Register Now button */}
        <div className="register-button-container-e">
          <button className="register-button-e" onClick={handleRegisterClick}>
            Register Now
          </button>
        </div>
      </div>
      </div>
         <br></br>

      <div className="content-box-e">
          <section id='title' className='py-md-5'>
            {/* <div className="title-box"> */}
              <h2 className='my-5 text-center'>What you'll learn</h2>
            {/* </div> */}
            <div className='learning-box-e'>
              <ul className='learning-list-e'>
                <li> * At The End Of This Course You Will Be Able To Develop Any E Commerce Website In PHP</li>
                <li> * Student Will Learn That How To Integrate Paypal In E Commerce Website In PHP</li>
                <li> * Student Will Able To Create Any CMS (Content Management System) In PHP</li>
                <li> * Student Will Learn Some Extra Ordinary Features Of PHP</li>
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
              <Accordion.Header>Introduction to E-commerce Web Development</Accordion.Header>
                 <Accordion.Body>
                 In the vast landscape of online commerce, establishing a robust and user-friendly e-commerce platform has become crucial for businesses and entrepreneurs alike. A well-designed e-commerce website not only showcases products effectively but also ensures a smooth and secure transaction process for customers.
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

export default Ecommerce;

