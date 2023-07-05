import React from "react";
import { FaCode, FaDesktop, FaTabletAlt } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="services-container">
        <div className="services-list-conatainer">
          {/* description */}
          <div className="services-desc-container">
            <h1>
              My Awesome <span>Services</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem sunt, quisquam deleniti, dolorum sequi esse dicta
              consectetur neque tempore ducimus iure quod facilis iusto saepe.
              Nobis deserunt eveniet numquam quisquam modi ex saepe dolorem
              commodi vitae laboriosam odit quasi itaque, fuga incidunt hic
              repellendus autem atque obcaecati sit impedit rerum.
            </p>
            <button className="btn btn-color">Hire Me</button>
          </div>
          {/* item */}
          <div className="services-item-container">
            <div className="services-item">
              <span>
                <FaCode />
              </span>
              <div className="item-desc">
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  dolore quo doloribus, iusto excepturi eos sapiente hic quae
                  eum facilis?
                </p>
              </div>
            </div>
            <div className="services-item">
              <span>
                <FaDesktop />
              </span>
              <div className="item-desc">
                <h3>Desktop Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  dolore quo doloribus, iusto excepturi eos sapiente hic quae
                  eum facilis?
                </p>
              </div>
            </div>
            <div className="services-item">
              <span>
                <FaTabletAlt />
              </span>
              <div className="item-desc">
                <h3>U/X Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  dolore quo doloribus, iusto excepturi eos sapiente hic quae
                  eum facilis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
