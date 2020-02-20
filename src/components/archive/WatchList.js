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
      <tr>
        <td>{stock.symbol}</td>
        <td>{stock.name}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <table>
          <caption>Watchlist</caption>
          <tr>
            <td>Stock Symbol</td>
            <td>Stock Name</td>
          </tr>
          {this.displayWatchList()}
        </table>
      </div>
    );
  }
}

export default WatchList;
