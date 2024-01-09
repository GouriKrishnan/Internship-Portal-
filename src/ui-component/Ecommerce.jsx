import React from 'react';
 import './Ecommerce.css';

 import EcommerceImage from '../Assets/E-Commerce Development.jpg'
 
 const Ecommerce = () => {

  const handleRegisterClick = () => {
    // Add your logic for the Register button click
    console.log('Register button clicked');
  };
   return (
    <div className="ecodev">
       
        {/* Image with text overlay */}
        <div className="image-container-e">
          <img src={EcommerceImage} alt="E-commerce Website Development  Project" className="project-image-e" />
          <div className="image-overlay-e">
          <div className="image-text-e">
          <h2>E-commerce Web Development Project</h2>
          <br></br>
          <h1>A-Z Guidelines With Full Practical To Develop An E commerce Website In PHP With PayPal And Cash On Delivery Method</h1>
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

          <div className="content-box-e-a">
          <section id='title' className='py-md-5'>
            {/* <div className="title-box"> */}
              <h2 className='my-5 text-center'>This course includes:</h2>
            {/* </div> */}
            <div className='learning-box-e-a'>
              <ul className='learning-list-e-a'>
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

export default Ecommerce;

