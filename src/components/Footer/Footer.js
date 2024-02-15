import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftFooter">
        <span className="footerText">Technology Student Association</span>
        <span className="footerText">TN State Leadership Conference 2024</span>
        <span className="footerText">Webmaster</span>
      </div>
      <div className="rightFooter">
        <span className="footerText">
          Programmed by Srikar Kusumanchi, Vihaan Bussa, and Darsh Shrivastava
        </span>
        <span className="footerText">
          Designed by Adi Yesare, Ethan Varghese and Vivaan Rochlani
        </span>
      </div>
    </div>
  );
};

export default Footer;
