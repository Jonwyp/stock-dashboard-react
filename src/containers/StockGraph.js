import React from "react";
import { Link, Route } from "react-router-dom";
import LineGraph from "../components/LineGraph";
import CandleStickGraph from "../components/CandleStickGraph";

function StockGraph() {
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
        <Route path="/candlestickgraph" component={CandleStickGraph} />
        <Route path="/linegraph" component={LineGraph} />
      </div>
    </div>
  );
}

export default StockGraph;
