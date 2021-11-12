import React from "react";

import "../styles/CardProduct.styl";

import LaikaMember from "../static/LaikaMemberNew.svg";

import formatCurrency from "../utils/formatCurrency.js";
const Product = ({ product, addItemToCart }) => {
  const starCount = [];

  for (let i = 0; i < product.star; i++) {
    starCount.push(<i className="fas fa-star"></i>);
  }

  const priceBack = product.price + product.price * 0.2;
  const priceLaikaMember = product.price - product.price * 0.05;
  return (
    <div className="Product">
      <img className="Product-img" src={product.photo} alt={product.name} />
      <h2 className="Product-name">{product.name}</h2>
      <div className="mb-1">{starCount}</div>
      <h3 className="Product-price">
        ${formatCurrency(product.price, "COL")}
        <span>
          Antes<b>${formatCurrency(priceBack, "COL")}</b>
        </span>
      </h3>
      <h3 className="Product-price">
        ${formatCurrency(priceLaikaMember, "COL")}
        <img src={LaikaMember} width="120" />
      </h3>
      <div className="weight-wrap">
        {product.weight.map((item, i) => (
          <span className="btn-weight" key={i}>
            {item}g
          </span>
        ))}
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={addItemToCart(product)}
      >
        <i className="fas fa-shopping-cart"></i>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Product;
