import React from "react";
import "./Features.scss";

import Illustration from "../../assets/images/Illustration.png";

const Features = () => {
  return (
    <section className="features">
      <div
        className="features__image"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <img src={Illustration} alt="illustration" />
      </div>
      <ul className="features__list">
        <li
          className="features__item"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="features__inner">
            <h3 className="features__title">Access Token Market</h3>
            <p className="features__desc">
              Buy and sell token anytime and anywhere
            </p>
          </div>
        </li>
        <li
          className="features__item"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="features__inner">
            <h3 className="features__title">User Friendly Interface </h3>
            <p className="features__desc">Easy to navigate</p>
          </div>
        </li>
        <li
          className="features__item"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="features__inner">
            <h3 className="features__title">Ownership Token control</h3>
            <p className="features__desc">
              Be in control and own as many asset as possible
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Features;
