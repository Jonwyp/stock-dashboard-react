import React from "react";
import Chart from "react-google-charts";

const CandleStickGraph = ({ chartData }) => {
  const reformatData = chartData.map(points => {
    return [
      points.date,
      points.uLow,
      points.uOpen,
      points.uClose,
      points.uHigh
    ];
  });
  reformatData.unshift(["Date", "Low", "Open", "Close", "High"]);
  return (
    <div data-testid="candleStickChart"><Chart
      width={"100%"}
      height={350}
      chartType="CandlestickChart"
      loader={<div>Loading Chart</div>}
      data={reformatData}
      options={{
        legend: "none",
        bar: { groupWidth: "100%" }, // Remove space between bars.
        candlestick: {
          fallingColor: { strokeWidth: 0, fill: "#ff0000" }, // red
          risingColor: { strokeWidth: 0, fill: "#008000" } // green
        }
      }}
      rootProps={{ "data-testid": "2" }}
    /></div>
  );
}

export default CandleStickGraph;
