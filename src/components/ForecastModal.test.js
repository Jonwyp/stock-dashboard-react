import React from "react";
import { shallow } from "enzyme";
import ForecastModal from "./ForecastModal";

describe("Forecast Modal Component", () => {
  it("should change title state when input is typed", () => {
    const render = shallow(<ForecastModal />);
    const titleInput = render.find({ placeholder: "Enter title here" });
    titleInput.simulate("change", { target: { value: "Test title" } });
    expect(render.state().title).toEqual("Test title");
  });

  it("should change target price state when input is typed", () => {
    const render = shallow(<ForecastModal />);
    const targetPriceInput = render.find({
      placeholder: "Enter target price here"
    });
    targetPriceInput.simulate("change", { target: { value: "380" } });
    expect(render.state().targetPrice).toEqual("380");
  });

  it("should change rationale state when input is typed", () => {
    const render = shallow(<ForecastModal />);
    const rationaleInput = render.find({
      placeholder: "Enter rationale here"
    });
    rationaleInput.simulate("change", {
      target: { value: "This is a test rationale" }
    });
    expect(render.state().rationale).toEqual("This is a test rationale");
  });
});
