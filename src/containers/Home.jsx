import React from "react";
import "../styles/Globals.styl";

import LaikaMember from "../static/LaikaMemberNew.svg";
import HeaderCategories from "../components/HeaderCategories";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <main className="Main">
      <div className="d-flex align-items-center flex-wrap justify-content-center">
        <HeaderCategories />
        <img src={LaikaMember} width="172" />
      </div>
      <Banner />
      <Carousel />
    </main>
  );
};

export default Home;
