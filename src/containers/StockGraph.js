import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import LineGraph from "../components/LineGraph";
import CandleStickGraph from "../components/CandleStickGraph";

function StockGraph({chartData}) {
  return (
    <div>
      <header>
        <Link to="/candlestickgraph">
          <button>Candlestick Graph</button>
        </Link>
        <Link to="/linegraph">
          <button>Line Graph</button>
        </Link>
      </header>
      <div>
        <Redirect exact from="/" to="candlestickgraph" />
        <Route path="/candlestickgraph" render={() => <CandleStickGraph chartData={chartData} />} />
        <Route path="/linegraph" render={() => <LineGraph chartData={chartData} />} />
      </div>
    </div>
  );
}

export default StockGraph;
