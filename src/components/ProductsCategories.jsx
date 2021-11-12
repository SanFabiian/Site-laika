import React from "react";
import categories from "../utils/categories.js";

const ProductsCategories = () => {
  return (
    <ul
      className="Categories-wrap dropdown-menu"
      aria-labelledby="dropdownMenuButton1"
    >
      {categories.map((cat) => (
        <li key={cat.id} className="Category-item">
          <div className="dropdown-item">
            <img src={cat.icon} alt={cat.name} />
            <h2>{cat.name}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductsCategories;
