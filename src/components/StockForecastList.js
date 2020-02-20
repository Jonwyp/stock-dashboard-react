import React from "react";
import StockForecast from "./StockForecast";
import "./StockForecastList.css";

const StockForecastList = ({ forecastData, enteredSymbol }) => {
  return (
    <div>
      <h2 className="forecastlist-header">
        Analysts' Forecast for {enteredSymbol}
      </h2>
      {forecastData.map((forecast, index) => {
        return (
          <div key={index}>
            <hr />
            <StockForecast {...forecast} />
          </div>
        );
      })}
    </div>
  );
};

export default StockForecastList;
