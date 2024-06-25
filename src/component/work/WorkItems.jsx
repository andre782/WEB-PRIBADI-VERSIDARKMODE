import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import "../../modedark.css"

const WorkItems = ({ item }) => {
  const handleDemoClick = () => {
    window.location.href = item.link;
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title}</h3>
      <button className="work__button" onClick={handleDemoClick}>
        Demo <AiOutlineArrowRight className='icon__button'/>
      </button>
    </div>
  );
};

export default WorkItems;
