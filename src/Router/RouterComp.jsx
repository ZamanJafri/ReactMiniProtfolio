import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";

const RouterComp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about-us" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterComp;
