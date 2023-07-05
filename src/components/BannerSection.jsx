import React from "react";
import Typical from "react-typical";
import profileImg from "../assets/img/profileImg.png";
const BannerSection = () => {
  return (
    <>
      <div className="conatiner">
        <div className="header-content">
          <h1>Hy! I'm</h1>
          <h2 className="fullname">Zaman Ahmad</h2>
          <h2>
            I'm a{" "}
            <Typical
              steps={[
                "Full Stack Develeoper 💚",
                1000,
                "React Develeoper ✅",
                1000,
                "Bakend Develeoper 💙 ",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam
            ut impedit, cupiditate illum rerum possimus. Nemo explicabo
            voluptatibus esse expedita obcaecati impedit distinctio labore
            mollitia praesentium velit? Eaque, nisi?
          </p>
          <button className="btn btn-color">Hire Me</button>
        </div>
        {/* img container */}
        <div className="profile-img-container">
          <img src={profileImg} alt="" />
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
