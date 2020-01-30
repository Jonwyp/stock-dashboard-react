import React from "react";
import Chart from "react-google-charts";

function LineGraph({ chartData }) {
  const reformatData = chartData.map(points => {
    return [points.date, points.uClose];
  });
  reformatData.unshift(["Date", "Close"]);
  return (
    <div data-testid="lineChart"><Chart
      width={"100%"}
      height={"400px"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={reformatData}
      options={{
        hAxis: {},
        vAxis: {},
        legend: { position: "none" }
      }}
      rootProps={{ "data-testid": "1" }}
    /></div>
  );
}

export default LineGraph;
