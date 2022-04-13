import React from "react";
import "./Subcribe.scss";

const Subcribe = () => {
  return (
    <section
      className="subcribe"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        Want to be aware of all update
      </h2>
      <form
        className="subcribe__form"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <input type="text" className="subcribe__input" />
        <input
          type="submit"
          value="Subcribe"
          className="btn btn--green subcribe__btn"
        />
      </form>
    </section>
  );
};

export default Subcribe;
