import React from "react";
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
    const { value } = this.state;

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
          <Form>
            <Form.Input
              fluid
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
            <Form.Group inline>
              <label>Position</label>
              <Form.Radio
                label="Long"
                value="long"
                checked={value === "long"}
                onChange={this.changePosition}
              />
              <Form.Radio
                label="Neutral"
                value="neutral"
                checked={value === "neutral"}
                onChange={this.changePosition}
              />
              <Form.Radio
                label="Short"
                value="short"
                checked={value === "short"}
                onChange={this.changePosition}
              />
            </Form.Group>
            <Form.Group inline>
              <label>Timeframe</label>
              <Form.Radio
                label="3 months"
                value="3 months"
                checked={value === "3 months"}
                onChange={this.changeTimeFrame}
              />
              <Form.Radio
                label="6 months"
                value="6 months"
                checked={value === "6 months"}
                onChange={this.changeTimeFrame}
              />
              <Form.Radio
                label="1 year"
                value="1 year"
                checked={value === "1 year"}
                onChange={this.changeTimeFrame}
              />
            </Form.Group>
            <Form.Input
              fluid
              label="Target Price"
              placeholder="Enter target price here"
              onChange={this.changeTargetPrice}
            />
            <Form.TextArea
              label="Rationale"
              placeholder="Enter rationale here"
              onChange={this.changeRationale}
            />
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>
        </ModalContent>
      </Modal>
    );
  }
}

export default ForecastModal;
