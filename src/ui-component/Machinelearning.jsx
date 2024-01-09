import React from 'react';
 import './Machinelearning.css';

 import MachinelearningImage from '../Assets/machine-learning-applications.jpg'
 
 const Machinelearning = () => {

  const handleRegisterClick = () => {
    // Add your logic for the Register button click
    console.log('Register button clicked');
  };
   return (
    <div className="mechdev">
       
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

          <div className="content-box-m-a">
          <section id='title' className='py-md-5'>
            {/* <div className="title-box"> */}
              <h2 className='my-5 text-center'>This course includes:</h2>
            {/* </div> */}
            <div className='learning-box-m-a'>
              <ul className='learning-list-m-a'>
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

export default Machinelearning;

