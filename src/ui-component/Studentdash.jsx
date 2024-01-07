import React, { useState } from 'react';
import './Studentdash.css';


import WebDevelopmentImage from "../Assets/web-development-image.jpg";
import DataScienceImage from "../Assets/what_is_Data_Science.jpg";
import MobileAppDevelopmentImage from "../Assets/mobile_app_development.jpg";
import EcommerceWebsiteDevelopmentImage from "../Assets/ecoomerce.jpg";
import MachineLearningImage from "../Assets/machine-learning-applications.jpg";
import MobileAppSecurityImage from "../Assets/mobile-app-security.jpg";

const Studentdash = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);


  const ProjectCard = ({ title, description, imgSrc, link }) => (
    <a href={link} className="project-card">
      <img src={imgSrc} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>  
  );
  

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
      link: '/datascience',
    },
    {
      title: 'Mobile App Development',
      description: 'Build a mobile app for iOS and Android platforms using React Native.',
      imgSrc: MobileAppDevelopmentImage,
      link: '/Appdevelopment',
    },
    {
        title: 'E-commerce Website Development',
        description: 'Build a full-fledged e-commerce website with product listings, shopping cart, and payment integration.',
        imgSrc: EcommerceWebsiteDevelopmentImage,
        link: '/Ecommerce',
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

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter projects based on the search query
    const filteredProjects = projectTopics.filter((project) =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query)
    );
    setFilteredProjects(filteredProjects);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      // Perform the search action here
      console.log('Search for:', searchQuery);
    }
  };
const projectsToDisplay = filteredProjects.length > 0 ? filteredProjects : projectTopics;

  return (
    <div className="studentdash">
      <h1>Let's Start Learning.!</h1>
      <br />

        {/* Search bar */}
        <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleEnterPress}
        className="search-bar"
      />

      
      <div className="project-list">
        {projectTopics.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Studentdash;
