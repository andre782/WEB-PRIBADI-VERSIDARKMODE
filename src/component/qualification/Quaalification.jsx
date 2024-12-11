import React from "react";
import "./qualification.css";
import sertifikatPDF from '../../assets/internsertifikat.pdf';
import sertifikatoftrainingdigitalmarketing from '../../assets/sertifikattrainingwebdevelopment.pdf';
import sertifikattrainingwebdevelopment from '../../assets/sertifikattrainingwebdevelopment.pdf';


import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";

const Quaalification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">mypersonal journy</span>

      <div className="container_qualification">
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <div className="qualification__button button--flex">
              <BsFillBriefcaseFill className="experience" /> Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div className="qualification__content">
              <div className="qualification__data">
                <div className="qualification__rounder"></div>
                <div className="qualification__line"></div>
                <div>
                  <h3 className="qualification__title">Web Developer</h3>
                  <span className="qualifiction__calender">
                    <AiOutlineCalendar /> 2023 
                  </span>
                </div>
              </div>

              <div className="qualification__data">
                <div className="qualification__rounder"></div>
                <div className="qualification__line"></div>
                <div>
                  <h3 className="qualification__title">Learn ReactJS</h3>
                  <span className="qualifiction__calender">
                    <AiOutlineCalendar /> 2022 - 2023
                  </span>
                </div>
              </div>

              <div className="qualification__data">
                <div className="qualification__rounder"></div>
                <div>
                  <h3 className="qualification__title"> Learn Web Developer</h3>
                  <span className="qualifiction__calender">
                    <AiOutlineCalendar /> 2021 - 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <div className="qualification__button button--flex">
              <BsFillBriefcaseFill className="experience" /> Certificate
            </div>
          </div>

          <div className="qualification__sections">
            <div className="qualification__content">
              <div className="qualification__data">
                <div className="qualification__rounder"></div>
                <div className="qualification__line"></div>
                <div>
                    <h3 className="qualification__title">Certificate Internship</h3>
                    <span className="qualifiction__calender">
                      <AiOutlineCalendar /> 2023
                    </span>
                    {/* Tautan ke PDF */}
                    <a href={sertifikatPDF}  className="qualification__pdf-link">
                       <button className="download-button">Download Sertifikat <HiDownload /></button>
                    </a>
                </div>

              </div>

              <div className="qualification__data">
                <div className="qualification__rounder"></div>
                <div className="qualification__line"></div>
                <div>
                    <h3 className="qualification__title">Certificate Training Digital Marketing</h3>
                    <span className="qualifiction__calender">
                      <AiOutlineCalendar /> 2023
                    </span>
                    {/* Tautan ke PDF */}
                    <a href={sertifikatoftrainingdigitalmarketing}  className="qualification__pdf-link">
                       <button className="download-button">Download Sertifikat <HiDownload /></button>
                    </a>
                </div>
              </div>

              <div className="qualification__data">
                <div className="qualification__rounder"></div>
                <div>
                    <h3 className="qualification__title">Certificate Training Web Development</h3>
                    <span className="qualifiction__calender">
                      <AiOutlineCalendar /> 2023
                    </span>
                    {/* Tautan ke PDF */}
                    <a href={sertifikattrainingwebdevelopment}  className="qualification__pdf-link">
                       <button className="download-button">Download Sertifikat <HiDownload /></button>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Quaalification;
