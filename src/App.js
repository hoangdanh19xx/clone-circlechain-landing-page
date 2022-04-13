import React, { useEffect } from "react";
import "./App.scss";
import Board from "./components/Board/Board";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Subcribe from "./components/Subcribe/Subcribe";
import Trend from "./components/Trend/Trend";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      <NavBar />
      <main>
        <Board />
        <section className="technology">
          <h2
            className="technology__heading"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Global Decentralize currency based on blockchain technology
          </h2>
          <p
            className="technology__text"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Web3 is the latest efficient technology
          </p>
        </section>
        <Features />
        <Trend />
        <Subcribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
