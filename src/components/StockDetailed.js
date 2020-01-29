import React from "react";

const StockDetailed = ({
  longDescription = `Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. Its products and services include iPhone, Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products, Apple Care, iCloud, digital content stores, streaming, and licensing services. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak on April 1, 1976 and is headquartered in Cupertino, CA.`,
  industry = "Telecommunication Equipment",
  sector = "Electronic Technology"
}) => {
  return (
    <div>
      <h2>Detailed Stock Information</h2>
      <ul>
        <li>
          <span style={{ fontWeight: "bold" }}>Description:</span>
          <span>{longDescription}</span>
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Industry:</span>
          <span>{industry}</span>
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Sector:</span>
          <span>{sector}</span>
        </li>
      </ul>
    </div>
  );
};

export default StockDetailed;
