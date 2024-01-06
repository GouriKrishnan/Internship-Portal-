 import React from 'react';
 import WebdevelopmentImage from "../Assets/web-development-image.jpg";
 import './Webdevelopment.css';

const Webdevelopment = () => {
  
   return (

      <div className="webdev">
        
        {/* <h3> Certified Web Development Project</h3>
       <br></br>
       <h2>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.</h2> */}

         <div className='image-wrapper'>
           <img src={WebdevelopmentImage} alt='' className='image'/>
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
                 
              
       
      </div>
    );
  };

export default Webdevelopment;


