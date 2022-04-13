import React from "react";
import Crypto from "../../assets/images/crypto_trading.png";

import "./Board.scss";

const Board = () => {
  return (
    <section className="board">
      <div className="board__content">
        <h1
          className="board__heading"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          Save, Buy and Sell Your blockchain asset
        </h1>
        <p
          className="board__desc"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          The easy to manage and trade your cryptocurency asset
        </p>
        <div
          className="board__buttons"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a href="!#" className="btn btn--primary">
            Connect Wallet
          </a>
          <a href="!#" className="btn btn--white">
            Start Trading
          </a>
        </div>
      </div>
      <div
        className="board__image"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <img src={Crypto} alt="crypto-illustation" />
      </div>
    </section>
  );
};

export default Board;
