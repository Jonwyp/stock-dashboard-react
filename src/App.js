import React from "react";
import "./App.css";
import StockSearch from "./components/StockSearch";
import WatchList from "./components/WatchList";
import StockInfo from "./components/StockInfo";
import StockDetailed from "./components/StockDetailed";
import { BrowserRouter } from "react-router-dom";
import StockGraph from "./containers/StockGraph";
import NewsList from "./components/NewsList";
import RandomNewsData from "./components/RandomNewsData";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <StockSearch />
        <WatchList />
        <StockInfo />
        <StockDetailed />
        <StockGraph />
        <NewsList newsData={RandomNewsData} />
      </div>
    </BrowserRouter>
  );
}

export default App;
