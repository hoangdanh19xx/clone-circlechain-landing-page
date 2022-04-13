import React from "react";
import "./CoinTrendItem.scss";
import Arrow from "../../assets/images/arrow.png";
import Bitcoin from "../../assets/images/bitcoin.png";
import Ethereum from "../../assets/images/ethereum.png";
import Binance from "../../assets/images/binance.png";
import Tether from "../../assets/images/tether.png";
import ChartState from "../../assets/images/chart-state.png";

const CoinTrendItem = () => {
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
            <img src={Bitcoin} alt="bitcoin-icon" />
            <span className="abb">BTC</span>
            <span className="small">BITCOIN</span>
          </div>
          <img src={Arrow} className="coin-info-right" alt="arrow-icon" />
        </div>
        <div className="coin-value">
          <div className="coin-value-left">
            <h4>$56,623.54</h4>
            <span>1.41%</span>
          </div>
          <img
            src={ChartState}
            className="coin-value-right"
            alt="chart-state"
          />
        </div>
      </div>
      <div
        className="coin-trend-item"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="coin-info">
          <div className="coin-info-left">
            <img src={Ethereum} alt="bitcoin-icon" />
            <span className="abb">ETH</span>
            <span className="small">ETHEREUM</span>
          </div>
          <img src={Arrow} className="coin-info-right" alt="arrow-icon" />
        </div>
        <div className="coin-value">
          <div className="coin-value-left">
            <h4>$4,267.90</h4>
            <span>2.22%</span>
          </div>
          <img
            src={ChartState}
            className="coin-value-right"
            alt="chart-state"
          />
        </div>
      </div>
      <div
        className="coin-trend-item"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <div className="coin-info">
          <div className="coin-info-left">
            <img src={Binance} alt="bitcoin-icon" />
            <span className="abb">BNB</span>
            <span className="small">BINANCE</span>
          </div>
          <img src={Arrow} className="coin-info-right" alt="arrow-icon" />
        </div>
        <div className="coin-value">
          <div className="coin-value-left">
            <h4>$56,623.54</h4>
            <span>1.41%</span>
          </div>
          <img
            src={ChartState}
            className="coin-value-right"
            alt="chart-state"
          />
        </div>
      </div>
      <div
        className="coin-trend-item"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <div className="coin-info">
          <div className="coin-info-left">
            <img src={Tether} alt="bitcoin-icon" />
            <span className="abb">USDT</span>
            <span className="small">TETHER</span>
          </div>
          <img src={Arrow} className="coin-info-right" alt="arrow-icon" />
        </div>
        <div className="coin-value">
          <div className="coin-value-left">
            <h4>$56,623.54</h4>
            <span>1.41%</span>
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
