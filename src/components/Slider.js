import "./Slider.css";

import React from "react";
import Slider from "rc-slider";

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let thisMonth = new Date().getMonth();
const marks = {
  0: month[thisMonth-11 < 0 ? thisMonth + 1 : thisMonth -11 ],
  1: month[thisMonth-10 < 0 ? thisMonth + 2 : thisMonth -10 ],
  2: month[thisMonth-9 < 0 ? thisMonth + 3 : thisMonth -9 ],
  3: month[thisMonth-8 < 0 ? thisMonth + 4 : thisMonth -8 ],
  4: month[thisMonth-7 < 0 ? thisMonth + 5 : thisMonth -7 ],
  5: month[thisMonth-6 < 0 ? thisMonth + 6 : thisMonth -6 ],
  6: month[thisMonth-5 < 0 ? thisMonth + 7 : thisMonth -5 ],
  7: month[thisMonth-4 < 0 ? thisMonth + 8 : thisMonth -4 ],
  8: month[thisMonth-3 < 0 ? thisMonth + 9 : thisMonth -3 ],
  9: month[thisMonth-2 < 0 ? thisMonth + 10 : thisMonth -2 ],
  10: month[thisMonth-1 < 0 ? thisMonth + 11 : thisMonth -1 ],
  11: month[thisMonth]
};
const style = { width: 400, margin: "auto" };

class RangeSlide extends React.Component {
  state = {
    sliderValues: [0, 11]
  };

  handleChange = sliderValues => {
    console.log({ sliderValues });
    this.props.sliderCallbackfn(sliderValues);
    this.setState({ sliderValues });
  };

  render() {
    const { sliderValues } = this.state;
    return (
      <div style={style}>
        <Slider.Range
          min={0}
          max={11}
          marks={marks}
          onChange={this.handleChange}
          defaultValue={sliderValues}
        />
      </div>
    );
  }
}

export default RangeSlide;
