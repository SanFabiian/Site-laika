import React from "react";
import formatIsoTime from "../utils/formatDate";
import "../styles/Footer.styl";
const Footer = () => {
  return (
    <footer>Todos los derechos reservados {formatIsoTime(new Date())}</footer>
  );
};

export default Footer;
