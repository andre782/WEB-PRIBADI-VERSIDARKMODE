import React from "react";
import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./footer.css"




const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Andre</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/andrreeee030/"
            className="footer__social-link"
            target="blank"
          >
            <InstagramOutlined />
          </a>

          <a href="https://www.facebook.com/andre.setyo.148" className="footer__social-link" target="blank">
            <FacebookOutlined /> 
          </a>

          <a
            href="https://www.linkedin.com/in/andreas-setyo-942a69251/"
            className="footer__social-link"
            target="blank"
          >
            <LinkedinOutlined />
          </a>
        </div>

        <div className="copyright">
            <p>copyright by ANDRE @2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
