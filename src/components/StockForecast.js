import React from "react";

const StockForecast = ({
  username,
  position,
  targetPrice,
  percentageFromTarget,
  timeFrame,
  title,
  rationale,
  createdAt
}) => {
  return (
    <div className="stockForecast" data-testid="stockForecast">
      <h3>{title}</h3>
      <div>Position: {position}</div>
      <div>
        Price Target: {targetPrice} ({timeFrame})
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
