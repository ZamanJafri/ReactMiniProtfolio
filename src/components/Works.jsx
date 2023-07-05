import React from "react";
import w1 from "../assets/img/w1.jpg";
import w2 from "../assets/img/w2.jpg";
import w3 from "../assets/img/w3.jpg";
import w4 from "../assets/img/w4.jpg";
import w5 from "../assets/img/w5.jpg";
import w6 from "../assets/img/w6.jpg";
const Works = () => {
  return (
    <>
      <div className="works-container">
        <h1>My Recent Works</h1>
        <div className="works-list-container">
          <div className="works-item">
            <img src={w1} alt="w1" />
          </div>
          <div className="works-item">
            <img src={w2} alt="w2" />
          </div>
          <div className="works-item">
            <img src={w3} alt="w3" />
          </div>
          <div className="works-item">
            <img src={w4} alt="w4" />
          </div>
          <div className="works-item">
            <img src={w5} alt="w5" />
          </div>
          <div className="works-item">
            <img src={w6} alt="w6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
