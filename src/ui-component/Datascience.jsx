import React from 'react'
import './Datascience.css'

 import DatascienceImage from '../Assets/datascience..jpeg'
 
 const Datascience = () => {

  const handleRegisterClick = () => {
    // Add your logic for the Register button click
    console.log('Register button clicked');
  };
   return (
    <div className="datadev">
       
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

          <div className="content-box-d">
          <section id='title' className='py-md-5'>
            {/* <div className="title-box"> */}
              <h2 className='my-5 text-center'>This course includes:</h2>
            {/* </div> */}
            <div className='learning-box-d'>
              <ul className='learning-list-d'>
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

export default Datascience;

