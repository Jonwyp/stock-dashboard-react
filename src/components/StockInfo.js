import React from "react";
import "./StockInfo.css";

const StockInfo = ({
  symbol = "AAPL",
  companyName = "Apple Inc.",
  exchange = "NASDAQ",
  latestPrice = "308.95",
  latestSource = "Close",
  week52High = "323.33",
  week52Low = "153.66",
  changePercent
}) => {
  return (
    <div className="stockinfo">
      <div className="stockinfo-body">
        <img
          className="stockinfo-body__logo"
          src={`https://storage.googleapis.com/iex/api/logos/${symbol}.png`}
          alt=""
        />
        <h2 className="stockinfo-body__name">
          <strong>
            {symbol} - {companyName}
          </strong>
        </h2>
      </div>
      <ul className="stockinfo-body__details">
        <li className="stockinfo-body__details__items">
          <strong>{latestSource}</strong>{" "}
          <span className="text-primary">{latestPrice}</span>
          <span className={changePercent > 0 ? "up" : "down"}>
            {changePercent > 0
              ? ` ${String.fromCharCode(9650)} (${changePercent * 100}%)`
              : ` ${String.fromCharCode(9660)} (${changePercent * 100}%)`}
          </span>
        </li>
        <li className="stockinfo-body__details__items">
          <strong>Week 52 High</strong>{" "}
          <span className="text-success">{week52High}</span>
        </li>
        <li className="stockinfo-body__details__items">
          <strong>Week 52 Low</strong>{" "}
          <span className="text-danger">{week52Low}</span>
        </li>
        <li className="stockinfo-body__details__items">
          <strong>Exchange</strong> {exchange}
        </li>
      </ul>
    </div>
  );
};

export default StockInfo;
