import React from "react";
import "../styles/Dropdown.styl";
import FlagColombia from "../static/flag-colombia.svg";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle d-flex align-items-center"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="d-flex flex-column">
          <img src={FlagColombia} alt="" />
          Bog
        </div>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <a className="dropdown-item" href="#">
            Other city
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Other city
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Other city
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
