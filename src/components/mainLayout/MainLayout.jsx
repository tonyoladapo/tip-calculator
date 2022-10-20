import React from "react";
import "./mainLayout.css";

const MainLayout = ({ children }) => {
  return <div className="container-fluid layout">{children}</div>;
};

export default MainLayout;
