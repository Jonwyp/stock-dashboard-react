import React from "react";
import StockForecast from "./StockForecast";
import ForecastModal from "./ForecastModal";
import "./StockForecastList.css";

class StockForecastList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="forecastlist-header">
          Community Forecast for {this.props.enteredSymbol}
        </h2>
        <ForecastModal
          openModal={this.props.openModal}
          closeModal={this.props.closeModal}
          modalOpen={this.props.modalOpen}
          enteredSymbol={this.props.enteredSymbol}
        />
        {this.props.forecastData.map((forecast, index) => {
          return (
            <div key={index}>
              <hr />
              <StockForecast
                forecast={forecast}
                index={index}
                latestPrice={this.props.latestPrice}
              />
            </div>
          );
        })}
        <hr />
      </div>
    );
  }
}

export default StockForecastList;
