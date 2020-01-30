import React from "react";
import "./StockDetailed.css";

const StockDetailed = ({
  description = `Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. Its products and services include iPhone, Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products, Apple Care, iCloud, digital content stores, streaming, and licensing services. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak on April 1, 1976 and is headquartered in Cupertino, CA.`,
  industry = "Telecommunication Equipment",
  sector = "Electronic Technology"
}) => {
  return (
    <div className="stockdetailed">
      <h2 className="stockdetailed-header">Detailed Stock Information</h2>
      <ul className="stockdetailed-list">
        <li style={{ fontWeight: "bold" }}>Description:</li>
        <li>{description}</li>
        <li style={{ fontWeight: "bold" }}>Industry:</li>
        <li>{industry}</li>
        <li style={{ fontWeight: "bold" }}>Sector:</li>
          <li>{sector}</li>
      </ul>
    </div>
  );
};

export default StockDetailed;
