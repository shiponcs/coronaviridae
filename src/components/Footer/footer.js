import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      Developed by <span>Abdul Matin</span>{" "}
      <a href="https://github.com/shiponcs" target="_blank">
        <img src={require("./gh-logo.png")} alt="" />
      </a>
    </footer>
  );
};

export default Footer;
