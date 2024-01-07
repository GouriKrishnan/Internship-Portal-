import React from 'react';
 import './Appdevelopment.css';

 import AppDevelopmentImage from '../Assets/mobile_app_development.jpg'
 
 const Appdevelopment = () => {

  const handleRegisterClick = () => {
    // Add your logic for the Register button click
    console.log('Register button clicked');
  };
   return (
    <div className="appdev">
       
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

          <div className="content-box-app-a">
          <section id='title' className='py-md-5'>
            {/* <div className="title-box"> */}
              <h2 className='my-5 text-center'>This course includes:</h2>
            {/* </div> */}
            <div className='learning-box-app-a'>
              <ul className='learning-list-app-a'>
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

export default Appdevelopment;

