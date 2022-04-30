import React from "react";
import "./CoinTrendItem.scss";
import Arrow from "../../assets/images/arrow.png";
import ChartState from "../../assets/images/chart-state.png";

const CoinTrendItem = ({ abb, name, img, price, rate }) => {
  return (
    <>
      <div
        className="coin-trend-item"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="coin-info">
          <div className="coin-info-left">
            <img src={img} alt="bitcoin-icon" />
            <span className="abb">{abb}</span>
            <span className="small">{name}</span>
          </div>
          <img src={Arrow} className="coin-info-right" alt="arrow-icon" />
        </div>
        <div className="coin-value">
          <div className="coin-value-left">
            <h4>{price}</h4>
            <span>{rate}</span>
          </div>
          <img
            src={ChartState}
            className="coin-value-right"
            alt="chart-state"
          />
        </div>
      </div>
    </>
  );
};

export default CoinTrendItem;
