import React, { useEffect, useState } from "react";
import "./Trend.scss";
import CoinTrendItem from "./CoinTrendItem";
import Bitcoin from "../../assets/images/bitcoin.png";
import Ethereum from "../../assets/images/ethereum.png";
import Binance from "../../assets/images/binance.png";
import Tether from "../../assets/images/tether.png";

const Trend = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const coins = [
    {
      id: 1,
      abb: "BTC",
      name: "BITCOIN",
      img: Bitcoin,
      price: "$56,623.54",
      rate: "2.22%",
    },
    {
      id: 2,
      abb: "ETH",
      name: "ETHEREUM",
      img: Ethereum,
      price: "$4,267.90",
      rate: "2.22%",
    },
    {
      id: 3,
      abb: "BNB",
      name: "BINANCE",
      img: Binance,
      price: "$56,623.54",
      rate: "1.41%",
    },
    {
      id: 4,
      abb: "BNB",
      name: "BINANCE",
      img: Tether,
      price: "$56,623.54",
      rate: "1.41%",
    },
    {
      id: 1,
      abb: "BTC",
      name: "BITCOIN",
      img: Bitcoin,
      price: "$56,623.54",
      rate: "2.22%",
    },
    {
      id: 2,
      abb: "ETH",
      name: "ETHEREUM",
      img: Ethereum,
      price: "$4,267.90",
      rate: "2.22%",
    },
    {
      id: 3,
      abb: "BNB",
      name: "BINANCE",
      img: Binance,
      price: "$56,623.54",
      rate: "1.41%",
    },
    {
      id: 4,
      abb: "BNB",
      name: "BINANCE",
      img: Tether,
      price: "$56,623.54",
      rate: "1.41%",
    },
    {
      id: 1,
      abb: "BTC",
      name: "BITCOIN",
      img: Bitcoin,
      price: "$56,623.54",
      rate: "2.22%",
    },
    {
      id: 2,
      abb: "ETH",
      name: "ETHEREUM",
      img: Ethereum,
      price: "$4,267.90",
      rate: "2.22%",
    },
    {
      id: 3,
      abb: "BNB",
      name: "BINANCE",
      img: Binance,
      price: "$56,623.54",
      rate: "1.41%",
    },
    {
      id: 4,
      abb: "BNB",
      name: "BINANCE",
      img: Tether,
      price: "$56,623.54",
      rate: "1.41%",
    },
    {
      id: 1,
      abb: "BTC",
      name: "BITCOIN",
      img: Bitcoin,
      price: "$56,623.54",
      rate: "2.22%",
    },
    {
      id: 2,
      abb: "ETH",
      name: "ETHEREUM",
      img: Ethereum,
      price: "$4,267.90",
      rate: "2.22%",
    },
    {
      id: 3,
      abb: "BNB",
      name: "BINANCE",
      img: Binance,
      price: "$56,623.54",
      rate: "1.41%",
    },
    {
      id: 4,
      abb: "BNB",
      name: "BINANCE",
      img: Tether,
      price: "$56,623.54",
      rate: "1.41%",
    },
  ];

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
        {coins.map((coin, index) => {
          if (width < 769) {
            if (index < 6) {
              return (
                <CoinTrendItem
                  key={index}
                  abb={coin.abb}
                  name={coin.name}
                  img={coin.img}
                  price={coin.price}
                  rate={coin.rate}
                />
              );
            }
            // eslint-disable-next-line array-callback-return
            return;
          }
          return (
            <CoinTrendItem
              key={index}
              abb={coin.abb}
              name={coin.name}
              img={coin.img}
              price={coin.price}
              rate={coin.rate}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Trend;
