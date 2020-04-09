import React from "react";
import { shallow } from "enzyme";
import StockForecast from "./StockForecast";
import { herokuBackend } from "../api/herokuBackend";
import MockAdapter from "axios-mock-adapter";
const mockAxios = new MockAdapter(herokuBackend);

describe("Stock Forecast component", () => {
  const sampleCounter = { likeCounter: 0, dislikeCounter: 0 };
  const sampleForecast = {
    id: "34298392-1ff3-0fb0-573f-72f44e15",
    userId: "efda0939-3101-f362-83fd-f3936fa3",
    username: "stockguru",
    position: "long",
    targetPrice: 380,
    timeFrame: "1 year",
    title: "Apple: The New iPhone Opportunity",
    rationale:
      "One of the reasons that technology giant Apple (AAPL) has seen its shares soar to new all-time highs recently is the expected iPhone supercycle coming this year. With the company getting ready to launch new 5G compatible phones, investors are betting that iPhone upgrade rates will soar, leading to new revenue and profit records.",
    createdAt: new Date(Date.now())
  };

  describe("rendering", () => {
    mockAxios.onGet(`/counters/${sampleForecast.id}`).reply(200, sampleCounter);

    it("should render forecast title upon initialisation", () => {
      const render = shallow(
        <StockForecast forecast={sampleForecast} index={0} latestPrice={390} />
      );
      expect(render.find(".stockForecast h3").text()).toEqual(
        sampleForecast.title
      );
    });

    it("should render forecast position upon initialisation", () => {
      const render = shallow(
        <StockForecast forecast={sampleForecast} index={0} latestPrice={390} />
      );
      expect(
        render
          .find(".stockForecast div")
          .at(0)
          .text()
      ).toEqual(`Position: ${sampleForecast.position}`);
    });

    it("should render forecast position upon initialisation", () => {
      const render = shallow(
        <StockForecast forecast={sampleForecast} index={0} latestPrice={390} />
      );
      expect(
        render
          .find(".stockForecast div")
          .at(1)
          .text()
      ).toEqual(
        `Price Target: ${sampleForecast.targetPrice} (${sampleForecast.timeFrame}) ▲ (2.63%)`
      );
    });

    it("should render forecast position upon initialisation", () => {
      const render = shallow(
        <StockForecast forecast={sampleForecast} index={0} latestPrice={390} />
      );
      expect(
        render
          .find(".stockForecast div")
          .at(2)
          .text()
      ).toEqual(sampleForecast.rationale);
    });
  });

  describe("likes and dislikes", () => {
    mockAxios
      .onGet(`/counters/${sampleForecast.id}`)
      .reply(200, { likeCounter: null, dislikeCounter: undefined });

    it("should set counter to 0 if axios GET call is null or undefined", () => {
      const render = shallow(
        <StockForecast forecast={sampleForecast} index={0} latestPrice={390} />
      );
      expect(render.state().likeCounter).toEqual(0);
      expect(render.state().dislikeCounter).toEqual(0);
    });

    it("should add likes to counter and return response from server when agree button is pressed", () => {
      const render = shallow(
        <StockForecast forecast={sampleForecast} index={0} latestPrice={390} />
      );
      const agreeButton = render.find("[aria-label='agree button']");
      agreeButton.simulate("click");
      expect(render.state().likeCounter).toEqual(1);
      mockAxios
        .onPatch(`/counters/${sampleForecast.id}`, render.state())
        .reply(200, render.state());
    });

    it("should add dislikes to counter and return response from server when disagree button is pressed", () => {
      const render = shallow(
        <StockForecast forecast={sampleForecast} index={0} latestPrice={390} />
      );
      const disagreeButton = render.find("[aria-label='disagree button']");
      disagreeButton.simulate("click");
      expect(render.state().dislikeCounter).toEqual(1);
      mockAxios
        .onPatch(`/counters/${sampleForecast.id}`, render.state())
        .reply(200, render.state());
    });
  });
});
