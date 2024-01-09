import React from 'react';
 import './MobileApp.css';

 import MobileAppImage from '../Assets/mobile-app-security.jpg'
 
 const MobileApp = () => {

  const handleRegisterClick = () => {
    // Add your logic for the Register button click
    console.log('Register button clicked');
  };
   return (
    <div className="mobdev">
       
        {/* Image with text overlay */}
        <div className="image-container-mob">
          <img src={MobileAppImage} alt="Mobile App Project" className="project-image-mob" />
          <div className="image-overlay-mob">
          <div className="image-text-mob">
          <h2>Certified Web Development Project</h2>
          <br></br>
          <h1>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.</h1>
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

          <div className="content-box-mob-a">
          <section id='title' className='py-md-5'>
            {/* <div className="title-box"> */}
              <h2 className='my-5 text-center'>This course includes:</h2>
            {/* </div> */}
            <div className='learning-box-mob-a'>
              <ul className='learning-list-mob-a'>
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

export default MobileApp;

