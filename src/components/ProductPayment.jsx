import React from "react";

import formatCurrency from "../utils/formatCurrency";
import "../styles/ProductPayment.styl";

const ProductPayment = ({ product }) => {
  return (
    <div className="ProductPayment">
      <img src={product.photo} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <h3>${formatCurrency(parseInt(product.price), "COL")}</h3>
      </div>
    </div>
  );
};

export default ProductPayment;
