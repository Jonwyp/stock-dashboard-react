import React from "react";
import Chart from "react-google-charts";
import RandomData from "./RandomData";

const reformatData = RandomData.map(obj => {
  return [obj.label, obj.uLow, obj.uOpen, obj.uClose, obj.uHigh];
});
reformatData.unshift(["Date", "Low", "Open", "Close", "High"]);
function CandleStickGraph() {
  return (
    <Chart
      width={"100%"}
      height={350}
      chartType="CandlestickChart"
      loader={<div>Loading Chart</div>}
      data={reformatData}
      options={{
        legend: "none",
        bar: { groupWidth: "100%" }, // Remove space between bars.
        candlestick: {
          fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
          risingColor: { strokeWidth: 0, fill: "#0f9d58" } // green
        }
      }}
      rootProps={{ "data-testid": "2" }}
    />
  );
}

export default CandleStickGraph;
