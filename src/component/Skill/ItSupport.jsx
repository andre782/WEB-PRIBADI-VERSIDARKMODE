import React from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import "./skill.css"

const ItSupport = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">IT support</h3>

      <div className="skills__box">

        <div className="skills__group">
          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>

            <div>
              <h3 className="skills__name">Troubleshooting Hardware</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>

            <div>
              <h3 className="skills__name">Networking</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>
            <div>
              <h3 className="skills__name">Microsoft Excel</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>

            <div>
              <h3 className="skills__name">Microsoft Word</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>

            <div>
              <h3 className="skills__name">CCTV Maintenance</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>
            <div>
              <h3 className="skills__name">Installing software</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <HiOutlineBadgeCheck className="icon"/>
            <div>
              <h3 className="skills__name">Manajemen Backup dan Recovery</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>

     

    </div>
  );
};

export default ItSupport;
