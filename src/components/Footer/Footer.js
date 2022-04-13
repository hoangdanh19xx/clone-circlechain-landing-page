import React from "react";
import "./Footer.scss";
import Logo from "../../assets/images/Logo.png";
import Facebook from "../../assets/images/facebook.png";
import Telegram from "../../assets/images/telegram.png";
import Linkedin from "../../assets/images/linkedin.png";
import Instagram from "../../assets/images/instagram.png";
import Robot from "../../assets/images/robot.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__item">
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <a href="!#">
            <img src={Logo} alt="circlechanin-logo" />
          </a>
        </h2>
        <p
          className="footer__text"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint.
          Velit officia consequatduis enim velit mollit. Exercitation
          veniamconsequat sunt nostrud amet.
        </p>
      </div>
      <div className="footer__item">
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          Quick Link
        </h2>
        <ul className="footer__links">
          <li
            className="footer__link"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <a href="!#">How it work</a>
          </li>
          <li
            className="footer__link"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <a href="!#">Blog</a>
          </li>
          <li
            className="footer__link"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <a href="!#">Support</a>
          </li>
        </ul>
      </div>
      <div className="footer__item">
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          Social Media
        </h2>
        <div className="footer__socials">
          <a
            href="!#"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img src={Facebook} alt="facebook-logo" />
          </a>
          <a
            href="!#"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src={Instagram} alt="instagram-logo" />
          </a>
          <a
            href="!#"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <img src={Linkedin} alt="linkedin-logo" />
          </a>
          <a
            href="!#"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <img src={Robot} alt="robot-logo" />
          </a>
          <a
            href="!#"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <img src={Telegram} alt="telegram-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
