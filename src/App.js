import React from "react";
import "./App.css";
import WatchList from "./components/WatchList";
import StockInfo from "./components/StockInfo";
import StockDetailed from "./components/StockDetailed";
import { BrowserRouter } from "react-router-dom";
import StockGraph from "./containers/StockGraph";
import NewsList from "./components/NewsList";
import {
  LoadStockQuote,
  LoadStockInfo,
  LoadStockNews,
  LoadStockChart
} from "./api/iex";

class App extends React.Component {
  state = {
    error: null,
    enteredSymbol: "AAPL",
    quote: null,
    news: [],
    chart: []
  };
  componentDidMount() {
    this.loadQuote();
  }

  loadQuote = () => {
    const { enteredSymbol } = this.state;

    Promise.all([
      LoadStockQuote(enteredSymbol),
      LoadStockInfo(enteredSymbol),
      LoadStockNews(enteredSymbol),
      LoadStockChart(enteredSymbol, "1y")
    ])
      .then(values => {
        const [quote, info, news, chart] = values;
        this.setState(prevState => {
          return {
            quote: quote,
            error: null,
            info: info,
            news: news,
            chart: chart
          };
        });
      })
      .catch(error => {
        error = new Error(`An error occurred while processing your request.`);
        this.setState({ error: error });
      });
  };

  onChangeEnteredSymbol = event => {
    this.setState({
      enteredSymbol: event.target.value
    });
  };

  onEnterKey = event => {
    if (event.keyCode === 13) {
      this.loadQuote();
    }
  };

  render() {
    const { quote, enteredSymbol, info, news, chart } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <div className="search">
            <h2>U.S. Stocks Dashboard</h2>
            <input
              value={enteredSymbol}
              type="text"
              placeholder="Search Stock Ticker Here..."
              className="search-box"
              onChange={this.onChangeEnteredSymbol}
              onKeyDown={this.onEnterKey}
            />
            <button onClick={this.loadQuote}>Find Quote</button>
          </div>
          <WatchList />
          {!!quote ? <StockInfo {...quote} /> : <p>Loading Stock...</p>}
          {!!info ? (
            <StockDetailed {...info} />
          ) : (
            <p>Loading Detailed Information</p>
          )}
          {!!chart ? <StockGraph chartData={chart} /> : <p>Loading Chart...</p>}
          <NewsList newsData={news} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
