import React from "react";
import "./StockSearch.css";

const StockSearch = () => {
  return (
    <div className="search">
      <h2>U.S. Stocks Dashboard</h2>
      <input
        type="text"
        placeholder="Search Stock Ticker Here..."
        className="search-box"
      />
      <button>Find Quote</button>
    </div>
  );
};

export default StockSearch;
