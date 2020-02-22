import React from "react";
import "./LoaderSpinner.css";

const LoaderSpinner = () => {
  return (
    <div className="loaderSpinner">
      <div className="header">
        <img
          className="header-companylogo"
          src={`${process.env.PUBLIC_URL}/stockuote.png`}
          alt="Company logo"
        />
        <span className="search">
          <h1>U.S. Stocks Dashboard</h1>
        </span>
      </div>
      <img src={require("../img/loadingSpinner.gif")} alt="loadingSpinner" />
    </div>
  );
};

export default LoaderSpinner;
