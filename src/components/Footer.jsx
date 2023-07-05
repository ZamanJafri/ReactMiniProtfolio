import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="my-logo">
            <h1>
              <span>P</span>
              <span>ortfolio.</span>
            </h1>
          </div>
          <div className="copy-right">
            <p>&copy; 2023 All Right reserved </p>
          </div>
        
        <div className="social-media-icon">
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaLinkedin />
          </span>
          <span>
            <FaTwitter />
          </span>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
