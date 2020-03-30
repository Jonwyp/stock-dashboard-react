import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./Dashboard.css";
import StockInfo from "../components/StockInfo";
import StockDetailed from "../components/StockDetailed";
import { BrowserRouter } from "react-router-dom";
import StockGraph from "./StockGraph";
import NewsList from "../components/NewsList";
import StockForecastList from "../components/StockForecastList";
import {
  LoadStockQuote,
  LoadStockInfo,
  LoadStockNews,
  LoadStockChart
} from "../api/iex";
import { LoadForecastData, herokuBackend } from "../api/herokuBackend";

class Dashboard extends React.Component {
  state = {
    error: null,
    enteredSymbol: "AAPL",
    quote: { symbol: "AAPL" },
    news: [],
    chart: [],
    forecast: [],
    showAllNews: false,
    showAllForecast: false,
    modalOpen: false
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
      LoadStockChart(enteredSymbol, "1y"),
      LoadForecastData(enteredSymbol)
    ])
      .then(values => {
        const [quote, info, news, chart, forecast] = values;
        this.setState(() => {
          return {
            quote: quote,
            error: null,
            info: info,
            news: news,
            chart: chart,
            forecast: forecast
          };
        });
      })
      .catch(error => {
        if (error.response.status) {
          error = new Error(
            `An error occurred while processing your request...`
          );
          this.setState({ error: error });
          alert(error.message);
        }
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

  onShowAllNews = () => {
    this.setState(prevState => {
      const showAllNews = prevState.showAllNews;
      return { showAllNews: !showAllNews };
    });
  };

  onShowAllForecast = () => {
    this.setState(prevState => {
      const showAllForecast = prevState.showAllForecast;
      return { showAllForecast: !showAllForecast };
    });
  };

  onClickLogOut = async () => {
    const res = await herokuBackend.post("/users/logout");
    if (res.status === 200) {
      this.props.parentProps.setState({ isLoggedIn: false });
    }
    console.log(res.data);
  };

  openModal = () => {
    const newState = this.state;
    newState.modalOpen = true;
    this.setState({ newState });
  };

  render() {
    const {
      quote,
      info,
      news,
      chart,
      forecast,
      showAllNews,
      showAllForecast,
      error,
      modalOpen
    } = this.state;
    const condensedNews = [...news].slice(0, 3);
    const condensedForecast = [...forecast].slice(0, 2);

    return (
        <BrowserRouter>
          <div className="dashboard">
            <div className="header">
              <img
                className="header-companylogo"
                src={`${process.env.PUBLIC_URL}/stockuote.png`}
                alt="Company logo"
              />
              <span className="search">
                <h1>U.S. Stocks Dashboard</h1>
                <input
                  type="text"
                  maxLength="5"
                  placeholder="Search Stock Ticker Here..."
                  className="search-box"
                  onChange={this.onChangeEnteredSymbol}
                  onKeyDown={this.onEnterKey}
                />
                <button onClick={this.loadQuote}>Find Quote</button>
              </span>
              <span>
                <button onClick={event => this.onClickLogOut(event)}>
                  Log Out
                </button>
              </span>
            </div>
            <div>
              <div>
                {!!error && (
                  <div className="alertbox">
                    <h3 className="alertbox-header">Alert!</h3>
                    <p>{error.message}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="stockmeta">
              <span className="stockmeta-span">
                {quote ? <StockInfo {...quote} /> : <p>Loading Stock...</p>}
              </span>
              <span className="stockmeta-span">
                {info ? (
                  <StockDetailed {...info} />
                ) : (
                  <p>Loading Detailed Information</p>
                )}
              </span>
            </div>
            <div className="forecast-wrap">
              {!!forecast && !!showAllForecast ? (
                <StockForecastList
                  forecastData={forecast}
                  enteredSymbol={quote.symbol}
                  modalOpen={modalOpen}
                  openModal={this.openModal}
                />
              ) : (
                <StockForecastList
                  forecastData={condensedForecast}
                  enteredSymbol={quote.symbol}
                  modalOpen={modalOpen}
                  openModal={this.openModal}
                />
              )}
              <button onClick={this.onShowAllForecast}>
                {showAllForecast ? "Show less forecast" : "Show more forecast"}
              </button>
            </div>
            {chart ? (
              <div>
                <StockGraph chartData={chart} enteredSymbol={quote.symbol} />
                <div style={{ margin: "30px 0 30px 0" }}>
                  <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
                </div>
              </div>
            ) : (
              <p>Loading Chart...</p>
            )}
            <div className="newlist-wrap">
              {!!news && !!showAllNews ? (
                <NewsList newsData={news} enteredSymbol={quote.symbol} />
              ) : (
                <NewsList
                  newsData={condensedNews}
                  enteredSymbol={quote.symbol}
                />
              )}
              <button onClick={this.onShowAllNews}>
                {showAllNews ? "Show less news" : "Show more news"}
              </button>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}
export default Dashboard;
