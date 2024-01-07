 import React from 'react';
 import WebdevelopmentImage from "../Assets/web-development-image.jpg";
 import './Webdevelopment.css';

 import WebDevelopmentImage from '../Assets/web-development-image.jpg'
 
 const Webdevelopment = () => {

  const handleRegisterClick = () => {
    // Add your logic for the Register button click
    console.log('Register button clicked');
  };
   return (
    <div className="webdev">
       
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
          <button className="register-button" onClick={handleRegisterClick}>
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
            {/* <div className="title-box"> */}
              <h2 className='my-5 text-center'>This course includes:</h2>
            {/* </div> */}
            <div className='learning-box-a'>
              <ul className='learning-list-a'>
                <li> Project Overview Document</li>
                <li> Reference Materials</li>
                <li> Weekly Submissions</li>
                <li> Viva voce </li>
                <li> Discussion Forum</li>
                <li> Certificate of Completion</li>
              </ul>
            </div>
          </section>
          </div>
                 
           <br></br>  

       
      </div>
    );
  };

export default Webdevelopment;


            
        
 
