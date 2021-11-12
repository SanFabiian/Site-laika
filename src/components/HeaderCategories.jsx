import React from "react";

import "../styles/HeaderCategories.styl";

import categoryDog from "../static/dog_mc.svg";
import categoryCat from "../static/cat_mc_s.svg";

import ProductsCategories from "../components/ProductsCategories";

const headerCategories = () => {
  return (
    <nav className="Header-categories">
      <li>
        <div className="dropdown">
          <button
            className="dropdown-toggle nav-item"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Perro
            <img src={categoryDog} alt="Imagen de un perro" />
          </button>
          <ProductsCategories />
        </div>
      </li>
      <li>
        <div className="dropdown">
          <button
            className="dropdown-toggle nav-item"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Gato
            <img src={categoryCat} alt="Imagen de un gato" />
          </button>
          <ProductsCategories />
        </div>
      </li>
    </nav>
  );
};

export default headerCategories;
