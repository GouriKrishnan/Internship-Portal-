import React, { useState } from 'react';
import './Studentdash.css';
import '../registration.css';
import '../reg.js';


import WebDevelopmentImage from "../Assets/web-development-image.jpg";
import DataScienceImage from "../Assets/what_is_Data_Science.jpg";
import MobileAppDevelopmentImage from "../Assets/mobile_app_development.jpg";
import EcommerceWebsiteDevelopmentImage from "../Assets/ecoomerce.jpg";
import MachineLearningImage from "../Assets/machine-learning-applications.jpg";
import MobileAppSecurityImage from "../Assets/mobile-app-security.jpg";

const Studentdash = () => {
  const ProjectCard = ({ title, description, imgSrc, link }) => (
    // <div className="project-card">
    <a href={link} className="project-card">
         <img src={imgSrc} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>  
  );
   

  // Example data for multiple project topics
  const projectTopics = [
    {
      title: 'Web Development Project',
      description: 'Create a responsive website using HTML, CSS, and JavaScript.',
      imgSrc: WebDevelopmentImage,
      link: '/webdevelopment',
    },
    {
      title: 'Data Science Project',
      description: 'Analyzing a dataset and presenting insights using Python and Jupyter Notebook.',
      imgSrc: DataScienceImage,
      link: '/data-science',
    },
    {
      title: 'Mobile App Development',
      description: 'Build a mobile app for iOS and Android platforms using React Native.',
      imgSrc: MobileAppDevelopmentImage,
      link: '/mobile-app',
    },
    {
        title: 'E-commerce Website Development',
        description: 'Build a full-fledged e-commerce website with product listings, shopping cart, and payment integration.',
        imgSrc: EcommerceWebsiteDevelopmentImage,
        link: '/e-commerce',
    },
    {
        title: 'Machine Learning Model Implementation',
        description: 'Implement a machine learning model using a popular framework (e.g., TensorFlow or PyTorch) for a specific use case.',
        imgSrc: MachineLearningImage,
        link: '/machine-learning',
    },
    {
        title: 'Mobile App Security Assessment',
        description: 'Conduct a security assessment on a mobile app, identify vulnerabilities, and propose security enhancements.',
        imgSrc: MobileAppSecurityImage,
        link: '/mobile-app',
      },


    // Add more projects as needed
  ];

  return (

    <div className="studentdash">
      <h1>Welcome to Your Dashboard!</h1>
      <br></br>

      <div className="project-list">
        {projectTopics.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
   


  );
};


    

export default Studentdash;
