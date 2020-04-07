import React from "react";

class StockForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likeCounter: 0, dislikeCounter: 0 };
  }

  render() {
    const {
      username,
      position,
      targetPrice,
      timeFrame,
      title,
      rationale,
      createdAt
    } = this.props.forecast;
    const percentageFromTargetPrice =
      position === "short"
        ? (targetPrice - this.props.latestPrice) / targetPrice
        : (this.props.latestPrice - targetPrice) / targetPrice;
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
          <span></span>
        </div>
      </div>
    );
  }
}

export default StockForecast;
