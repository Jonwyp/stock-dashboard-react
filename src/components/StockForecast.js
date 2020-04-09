import React from "react";
import { herokuBackend } from "../api/herokuBackend";
import { Button, Label, Icon } from "semantic-ui-react";

class StockForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCounter: 0,
      dislikeCounter: 0
    };
  }

  componentDidMount() {
    this.getLikesDislikes();
  }

  componentDidUpdate(prevProps) {
    if (this.props.forecast.id !== prevProps.forecast.id) {
      this.getLikesDislikes();
    }
  }

  getLikesDislikes = async () => {
    const res = await herokuBackend.get(`/counters/${this.props.forecast.id}`);
    let { likeCounter, dislikeCounter } = res.data;
    if (likeCounter === undefined || likeCounter === null) {
      likeCounter = 0;
    }
    if (dislikeCounter === undefined || dislikeCounter === null) {
      dislikeCounter = 0;
    }
    this.setState({ likeCounter, dislikeCounter });
  };

  addLikes = async id => {
    let likeCounter = this.state.likeCounter;
    likeCounter += 1;
    this.setState({ likeCounter: likeCounter });
    const payload = { forecastId: id, ...this.state };
    const res = await herokuBackend.patch(`/counters/${id}`, payload);
    return res.data;
  };

  addDislikes = async id => {
    let dislikeCounter = this.state.dislikeCounter;
    dislikeCounter += 1;
    this.setState({ dislikeCounter: dislikeCounter });
    const payload = { forecastId: id, ...this.state };
    const res = await herokuBackend.patch(`/counters/${id}`, payload);
    return res.data;
  };

  render() {
    const {
      username,
      id,
      position,
      targetPrice,
      timeFrame,
      title,
      rationale,
      createdAt
    } = this.props.forecast;
    const percentageFromTargetPrice =
      position === "short"
        ? (targetPrice - this.props.latestPrice) / targetPrice
        : (this.props.latestPrice - targetPrice) / targetPrice;
    return (
      <div className="stockForecast" data-testid="stockForecast">
        <h3>{title}</h3>
        <div>Position: {position}</div>
        <div>
          Price Target: {targetPrice} ({timeFrame})
          <span className={percentageFromTargetPrice > 0 ? "up" : "down"}>
            {percentageFromTargetPrice > 0
              ? ` ${String.fromCharCode(9650)} (${(
                  percentageFromTargetPrice * 100
                ).toFixed(2)}%)`
              : ` ${String.fromCharCode(9660)} (${(
                  percentageFromTargetPrice * 100
                ).toFixed(2)}%)`}
          </span>
        </div>
        <div>{rationale}</div>
        <div className="user">By: {username}</div>
        <div>
          Posted:{" "}
          {new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
          }).format(new Date(createdAt))}
        </div>
        <div>
          <Button.Group floated="right">
            <Button
              aria-label="agree button"
              size="mini"
              as="div"
              labelPosition="right"
              onClick={() => this.addLikes(id)}
            >
              <Button icon>
                <Icon name="thumbs up" />
                Agree
              </Button>
              <Label size="mini" basic pointing="left">
                {this.state.likeCounter}
              </Label>
            </Button>
            <Button
              aria-label="disagree button"
              size="mini"
              as="div"
              labelPosition="right"
              onClick={() => this.addDislikes(id)}
            >
              <Button icon>
                <Icon name="thumbs down" />
                Disagree
              </Button>
              <Label size="mini" basic pointing="left">
                {this.state.dislikeCounter}
              </Label>
            </Button>
          </Button.Group>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default StockForecast;
