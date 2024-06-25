import React from 'react'
import { FaAward } from "react-icons/fa";
import { BiBriefcaseAlt2, BiSupport } from "react-icons/bi";

const Info = ({ isDarkMode }) => {
  return (
    <div className={`about__info grid ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="about__box">
            <FaAward style={{fontSize: '25px'}}/>
            <h3 className='about__title'>Experience</h3>
            <span className="about__subtitle">1 Years working</span>
        </div>

        <div className="about__box">
            <BiBriefcaseAlt2 style={{fontSize: '25px'}}/>
            <h3 className='about__title'>Completed</h3>
            <span className="about__subtitle">10 project</span>
        </div>

        <div className="about__box">
            <BiSupport style={{fontSize: '25px'}}/>
            <h3 className='about__title'>Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info
