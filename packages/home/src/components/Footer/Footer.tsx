import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <span>Subscribe to our newsletter</span>
        <div className="subscription">
          <input type="email" placeholder="Your email" />
          <button className="signup-button">SIGN UP</button>
        </div>
      </div>
      <div className="social-links">
        <a href="#">twitter</a>
        <a href="#">facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
