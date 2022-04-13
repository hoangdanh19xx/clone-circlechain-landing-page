import React, { useEffect, useState } from "react";
import "./Trend.scss";
import CoinTrendItem from "./CoinTrendItem";

const Trend = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="trend">
      <h2
        className="trend__heading"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        Market Trend
      </h2>
      <div className="trend__list">
        {width > 768 ? (
          <>
            <CoinTrendItem />
            <CoinTrendItem />
            <CoinTrendItem />
            <CoinTrendItem />
          </>
        ) : (
          <CoinTrendItem />
        )}
      </div>
    </section>
  );
};

export default Trend;
