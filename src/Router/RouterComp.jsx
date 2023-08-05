import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import NotFound from "../components/NotFound";
import Registration from "../user-register/Registration";
import Login from "../user-register/Login";

const RouterComp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Registration/>}/> */}
          {/* <Route path="/login" element={<Login/>}/> */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterComp;
