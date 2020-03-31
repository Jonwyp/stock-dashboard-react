import React from "react";

const StockForecast = ({
  username,
  position,
  targetPrice,
  latestPrice,
  timeFrame,
  title,
  rationale,
  createdAt
}) => {
  const percentageFromTargetPrice =
    position === "short"
      ? (targetPrice - latestPrice) / targetPrice
      : (latestPrice - targetPrice) / targetPrice;
  return (
    <div className="stockForecast" data-testid="stockForecast">
      <h3>{title}</h3>
      <div>Position: {position}</div>
      <div>
        Price Target: {targetPrice} ({timeFrame})
        <span className={percentageFromTargetPrice > 0 ? "up" : "down"}>
          {percentageFromTargetPrice > 0
            ? ` ${String.fromCharCode(9650)} (${(
                percentageFromTargetPrice * 100
              ).toFixed(2)}%)`
            : ` ${String.fromCharCode(9660)} (${(
                percentageFromTargetPrice * 100
              ).toFixed(2)}%)`}
        </span>
      </div>
      <div>{rationale}</div>
      <div className="user">By: {username}</div>
      <div>
        Posted:{" "}
        {new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        }).format(new Date(createdAt))}
      </div>
    </div>
  );
};

export default StockForecast;
