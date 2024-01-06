import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import '../style2.css';
const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Learning",
      text: "ICT Academy of Kerala provides the best quality education to upskill the youths across the state in various sectors. Join our courses and build your future!",
    },
    {
      image: ChooseMeals,
      title: "Six-Month Programs",
      text: "Elevate your career through the Six-month Certification Programs offered by the ICT Academy of Kerala. ",
    },
    {
      image: DeliveryMeals,
      title: "ICTAK",
      text: "ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for improving their employability opportunities in the Industry.",
    },
  ];
  return (

    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">About</h1>
        <p className="primary-text">
        ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;