import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";
import { herokuBackend } from "../api/herokuBackend";
import MockAdapter from "axios-mock-adapter";

const mockAxios = new MockAdapter(herokuBackend);

describe("Dashboard", () => {
  mockAxios.onGet("/stocks/AAPL").reply(200);

  it("should render candlestick chart when candlestick chart link is clicked", () => {
    const { getByText, getByTestId } = render(<Dashboard />);

    const candlestickLink = getByText("Candlestick Graph");
    fireEvent.click(candlestickLink);

    const candleStickChart = getByTestId("candleStickChart");
    expect(candleStickChart).toBeInTheDocument();
  });

  it("should render line chart when line chart link is clicked", () => {
    const { getByText, getByTestId } = render(<Dashboard />);

    const lineChartLink = getByText("Line Graph");
    fireEvent.click(lineChartLink);

    const lineChart = getByTestId("lineChart");
    expect(lineChart).toBeInTheDocument();
  });

  it("should render search bar on intialisation", () => {
    const { getByPlaceholderText } = render(<Dashboard />);

    const searchBox = getByPlaceholderText("Search Stock Ticker Here...");
    expect(searchBox).toBeInTheDocument();
  });

  it("should change entered symbol state when input on search bar is typed", () => {
    const render = shallow(<Dashboard />);

    const searchBox = render.find({
      placeholder: "Search Stock Ticker Here..."
    });
    searchBox.simulate("change", { target: { value: "TWTR" } });
    expect(render.state().enteredSymbol).toEqual("TWTR");
  });

  it("should render findquote button on intialisation", () => {
    const { getByText } = render(<Dashboard />);

    const findQuoteButton = getByText("Find Quote");
    expect(findQuoteButton).toBeInTheDocument();
  });

  it("should render community forecast on initialisation", () => {
    const { getByText } = render(<Dashboard />);

    const forecastSection = getByText("Community Forecast for AAPL");
    expect(forecastSection).toBeInTheDocument();
  });

  it("should render show more forecast button on initialisation", () => {
    const { getByLabelText } = render(<Dashboard />);

    const showForecastButton = getByLabelText("show forecast button");
    expect(showForecastButton).toBeInTheDocument();
  });

  it("should render news list on initialisation", () => {
    const { getByText } = render(<Dashboard />);
    const newsSection = getByText("Top News for AAPL");
    expect(newsSection).toBeInTheDocument();
  });

  it("should render show more news button on initialisation", () => {
    const { getByLabelText } = render(<Dashboard />);
    const showNewsButton = getByLabelText("show news button");
    expect(showNewsButton).toBeInTheDocument();
  });

  it("should render add forecast modal when add new forecast button is clicked", async () => {
    const { getByLabelText, getByPlaceholderText } = render(<Dashboard />);
    const addForecastButton = getByLabelText("forecast modal button");
    expect(addForecastButton).toBeInTheDocument();
    fireEvent.click(addForecastButton);
    expect(getByPlaceholderText("Enter title here")).toBeInTheDocument();
  });
});
