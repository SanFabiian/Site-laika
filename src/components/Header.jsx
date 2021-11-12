import React from "react";
import "../styles/Header.styl";

import Menu from "../components/Menu";
import Searcher from "../components/Searcher";

const Header = () => {
  return (
    <header className="fixed-top">
      <div className="container">
        <Menu />
        <Searcher />
      </div>
    </header>
  );
};

export default Header;
