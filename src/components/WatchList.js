import React from "react";

class WatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [
        { symbol: "AAPl", name: "Apple Inc" },
        { symbol: "BABA", name: "Alibaba Group Holding Limited" }
      ]
    };
  }

  displayWatchList() {
    return this.state.stocks.map(stock => (
      <div>
        <ul>
          <li>
            <span>{stock.symbol}</span>
            <span>{stock.name}</span>
          </li>
        </ul>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div>Watchlist</div>
        <div>{this.displayWatchList()}</div>
      </div>
    );
  }
}

export default WatchList;
