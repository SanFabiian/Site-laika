import React, { useContext } from "react";

import "../styles/Carousel.styl";

import AppContext from "../context/AppContext";
import CardProduct from "./CardProduct";
const Carousel = () => {
  const { addToCart, products } = useContext(AppContext);
  const addItemToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <section className="Carousel container">
      {products.map((item) => (
        <CardProduct
          key={item.id}
          product={item}
          addItemToCart={addItemToCart}
        />
      ))}
    </section>
  );
};

export default Carousel;
