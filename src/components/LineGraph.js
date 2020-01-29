import React from "react";
import Chart from "react-google-charts";
import RandomData from "./RandomData";

const reformatData = RandomData.map(obj => {
  return [obj.label, obj.uClose];
});
reformatData.unshift(["Date", "Close"]);
function LineGraph() {
  return (
    <Chart
  width={'600px'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={reformatData}
  options={{
    hAxis: {
      title: 'Date',
    },
    vAxis: {
      title: 'Price',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
  );
}

export default LineGraph;
