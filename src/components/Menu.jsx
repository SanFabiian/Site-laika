import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

import "../styles/Menu.styl";

import logo from "../static/LaikaMascotas.svg";

import Dropdown from "../components/Dropdown";

const Menu = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <nav className="Menu navbar">
      <div className="container-fluid">
        <div className="Menu-top">
          <button
            className="navbar-toggler d-block d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link to="/" className="d-flex flex-column">
            <img src={logo} alt="" />
            Laika
          </Link>
          <div className="d-flex align-items-center">
            <Dropdown />
            <Link to="/payment">
              <i className="fas fa-shopping-cart">
                {cart != undefined && cart.length > 0 ? (
                  <span className="cart-count">{cart.length}</span>
                ) : (
                  ""
                )}
              </i>
            </Link>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="offcanvasNavbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="offcanvasNavbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
