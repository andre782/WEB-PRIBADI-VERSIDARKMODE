import React from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import "./skill.css"

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend developer</h3>

      <div className="skills__box">

        <div className="skills__group">
          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>

            <div>
              <h3 className="skills__name">GOLANG</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>
            <div>
              <h3 className="skills__name">PostgreSQL</h3>
              <span className="skills__level">basic</span>
            </div>
          </div>

          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>

            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>

            <div>
              <h3 className="skills__name">Gin</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>
            <div>
              <h3 className="skills__name">Gorm</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
