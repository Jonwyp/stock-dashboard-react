import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import LineGraph from "../components/LineGraph";
import CandleStickGraph from "../components/CandleStickGraph";
import RangeSlide from "../components/Slider";
import "./StockGraph.css"

class StockGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [0, 11] };
  }

  sliderCallbackfn = childValue => {
    this.setState({ values: childValue });
  };

  render() {
    const chartData = this.props.chartData;
    const enteredSymbol = this.props.enteredSymbol;
    const filteredChartData = chartData.slice(
      this.state.values[0] === 0
        ? 0
        : ((chartData.length + 1) / 11) * this.state.values[0],
      ((chartData.length + 1 )/ 11) * this.state.values[1]
    );

    return (
      <div>
        <h2 className="stockgraph-header">Daily Stock Chart for {enteredSymbol} (Trailing 1 year)</h2>
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
          <Route
            path="/candlestickgraph"
            render={() => <CandleStickGraph chartData={filteredChartData} />}
          />
          <Route
            path="/linegraph"
            render={() => <LineGraph chartData={filteredChartData} />}
          />
          <RangeSlide sliderCallbackfn={this.sliderCallbackfn} />
        </div>
      </div>
    );
  }
}

export default StockGraph;
