import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import Facebook from "../../assets/images/facebook.png";
import Telegram from "../../assets/images/telegram.png";
import Linkedin from "../../assets/images/linkedin.png";
import Instagram from "../../assets/images/instagram.png";
import Robot from "../../assets/images/robot.png";

import "./NavBar.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__logo" data-aos="fade-up" data-aos-duration="1000">
        <a href="!#">
          <img src={Logo} alt="circlechanin-logo" />
        </a>
      </div>
      <ul
        className={`nav__menu ${isOpen ? "open" : ""}`}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <li>
          <a href="!#">How it work</a>
        </li>
        <li>
          <a href="!#">Blog</a>
        </li>
        <li>
          <a href="!#">Support</a>
        </li>
      </ul>
      <div
        className="nav__socials"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <a href="!#">
          <img src={Facebook} alt="facebook-logo" />
        </a>
        <a href="!#">
          <img src={Instagram} alt="instagram-logo" />
        </a>
        <a href="!#">
          <img src={Linkedin} alt="linkedin-logo" />
        </a>
        <a href="!#">
          <img src={Robot} alt="robot-logo" />
        </a>
        <a href="!#">
          <img src={Telegram} alt="telegram-logo" />
        </a>
      </div>

      <div className="nav__toggle" data-aos="fade-up" data-aos-duration="1000">
        {isOpen ? (
          <ion-icon
            name="close-outline"
            onClick={() => setIsOpen(false)}
          ></ion-icon>
        ) : (
          <ion-icon
            name="menu-outline"
            onClick={() => setIsOpen(true)}
          ></ion-icon>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
