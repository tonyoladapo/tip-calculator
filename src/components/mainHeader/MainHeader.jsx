import React from "react";
import logo from "../../assets/img/logo.svg";
import "./mainHeader.css";

const MainHeader = () => {
  return (
    <div className="header-layout">
      <img src={logo} className="logo" />
    </div>
  );
};

export default MainHeader;
