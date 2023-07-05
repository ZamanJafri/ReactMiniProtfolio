import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navbarhandler = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      <nav>
        <div className="nav-logo">
          <h1>
            <span>P</span>
            <span>ortfolio.</span>
          </h1>
        </div>
        <div className={navbar ? "nav-links active" : "nav-links"}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact-Us</a>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={navbarhandler}>
          {navbar ? <span className="nav-toggle">x</span> : <span className="nav-toggle"><FaBars /></span>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
