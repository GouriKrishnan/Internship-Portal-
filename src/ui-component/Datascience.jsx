import React from 'react';
import { Link } from 'react-router-dom';
import './Datascience.css';
import DatascienceImage from '../Assets/orange theme.jpg'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

 const Datascience = () => {

  const handleRegisterClick = () => {
    // Add your logic for the Register button click
    console.log('Register button clicked');
  };
   return (
    <div className="datadev">

<Link to="/Studentdash" className="back-button">Back</Link> {/*Add this line for the back button */}
       
        {/* Image with text overlay */}
        <div className="image-container-d">
          <img src={DatascienceImage} alt="Data Science Project" className="project-image-d" />
          <div className="image-overlay-d">
          <div className="image-text-d">
          <h2>Data Science Project</h2>
          <br></br>
          <h1>Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python, Deep Learning.</h1>
        </div>

        {/* Register Now button */}
        <div className="register-button-container-d">
          <button className="register-button-d" onClick={handleRegisterClick}>
            Register Now
          </button>
        </div>
      </div>
      </div>
         <br></br>

      <div className="content-box-d">
          <section id='title' className='py-md-5'>
            {/* <div className="title-box"> */}
              <h2 className='my-5 text-center'>What you'll learn</h2>
            {/* </div> */}
            <div className='learning-box'>
              <ul className='learning-list'>
                <li> * The course provides the entire toolbox you need to become a data scientist.</li>
                <li> * Learn how to pre-process data.</li>
                <li> * Understand the mathematics behind Machine Learning.</li>
                <li> * Start coding in Python and learn how to use it for statistical analysis.</li>
                <li> * Perform linear and logistic regressions in Python.</li>
                <li> * Carry out cluster and factor analysis.</li>
                <li> * Be able to create Machine Learning algorithms in Python, using NumPy, statsmodels and scikit-learn.</li>
                <li> * Unfold the power of deep neural networks.</li>
                <li> * Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance</li>
                <li> * Warm up your fingers as you will be eager to apply everything you have learned here to more and more real-life situations </li>
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
              <Accordion.Header>Introduction to Data Science</Accordion.Header>
                 <Accordion.Body>
                 Data scientist is one of the best suited professions to thrive this century. It is digital, programming-oriented, and analytical. Therefore, it comes as no surprise that the demand for data scientists has been surging in the job marketplace.     

                 However, supply has been very limited. It is difficult to acquire the skills necessary to be hired as a data scientist.    
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

export default Datascience;

