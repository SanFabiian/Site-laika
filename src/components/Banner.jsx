import React from "react";

import bannerOne from "../static/banner-dog.png";
import bannerTwo from "../static/banner-02.png";
import bannerThree from "../static/banner-03.jpg";

const Banner = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bannerOne} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={bannerTwo} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={bannerThree} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Banner;
