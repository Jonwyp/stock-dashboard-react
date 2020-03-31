import React from "react";
import { herokuBackend } from "../api/herokuBackend";
import { Modal, Button, Header, Form, ModalContent } from "semantic-ui-react";

class ForecastModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      quote: this.props.enteredSymbol,
      position: "",
      timeFrame: "",
      targetPrice: "",
      rationale: ""
    };
  }

  submitForecast = async () => {
    let payload = this.state;
    const res = await herokuBackend.post(
      `/stocks/${this.state.quote}/forecast`,
      payload
    );
    this.props.closeModal();
    return res.data;
  };

  changeTitle = (event, { value }) => {
    const state = this.state;
    state.title = value;
    this.setState(state);
  };

  changePosition = (event, { value }) => {
    const state = this.state;
    state.position = value;
    this.setState(state);
  };

  changeTimeFrame = (event, { value }) => {
    const state = this.state;
    state.timeFrame = value;
    this.setState(state);
  };

  changeTargetPrice = (event, { value }) => {
    const state = this.state;
    state.targetPrice = value;
    this.setState(state);
  };

  changeRationale = (event, { value }) => {
    const state = this.state;
    state.rationale = value;
    this.setState(state);
  };

  render() {
    return (
      <Modal
        trigger={
          <Button onClick={this.props.openModal}>Add new forecast</Button>
        }
        open={this.props.modalOpen}
        onClose={this.props.closeModal}
        size="fullscreen"
      >
        <Header icon="pencil" content="Add new forecast" />
        <ModalContent>
          <Form onSubmit={this.submitForecast}>
            <Form.Input
              fluid
              required
              label="Title"
              placeholder="Enter title here"
              onChange={this.changeTitle}
            />
            <Form.Input
              fluid
              label="Stock Quote"
              disabled
              value={this.props.enteredSymbol}
            />
            <Form.Group required inline>
              <label>Position</label>
              <Form.Radio
                label="Long"
                value="long"
                checked={this.state.position === "long"}
                onChange={this.changePosition}
              />
              <Form.Radio
                label="Neutral"
                value="neutral"
                checked={this.state.position === "neutral"}
                onChange={this.changePosition}
              />
              <Form.Radio
                label="Short"
                value="short"
                checked={this.state.position === "short"}
                onChange={this.changePosition}
              />
            </Form.Group>
            <Form.Group required inline>
              <label>Timeframe</label>
              <Form.Radio
                label="3 months"
                value="3 months"
                checked={this.state.timeFrame === "3 months"}
                onChange={this.changeTimeFrame}
              />
              <Form.Radio
                label="6 months"
                value="6 months"
                checked={this.state.timeFrame === "6 months"}
                onChange={this.changeTimeFrame}
              />
              <Form.Radio
                label="1 year"
                value="1 year"
                checked={this.state.timeFrame === "1 year"}
                onChange={this.changeTimeFrame}
              />
            </Form.Group>
            <Form.Input
              fluid
              required
              label="Target Price"
              placeholder="Enter target price here"
              onChange={this.changeTargetPrice}
            />
            <Form.TextArea
              label="Rationale"
              required
              placeholder="Enter rationale here"
              onChange={this.changeRationale}
            />
            <Form.Button content="Submit" />
            <Form.Button
              onClick={this.props.closeModal}
              content="Close Window"
            />
          </Form>
        </ModalContent>
      </Modal>
    );
  }
}

export default ForecastModal;
