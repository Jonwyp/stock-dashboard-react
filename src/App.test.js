import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render candlestick chart when candlestick chart link is clicked", () => {
    const { getByText, getByTestId } = render(<App />);

    const candlestickLink = getByText("Candlestick Graph");
    fireEvent.click(candlestickLink);

    const candleStickChart = getByTestId("candleStickChart");
    expect(candleStickChart).toBeInTheDocument();
  });

  it("should render line chart when line chart link is clicked", () => {
    const { getByText, getByTestId } = render(<App />);

    const lineChartLink = getByText("Line Graph");
    fireEvent.click(lineChartLink);

    const lineChart = getByTestId("lineChart");
    expect(lineChart).toBeInTheDocument();
  });

  it("should render search bar on intialisation", () => {
    const { getByPlaceholderText } = render(<App />);

    const searchBar = getByPlaceholderText("Search Stock Ticker Here...");
    expect(searchBar).toBeInTheDocument();
  });

  it("should render findquote button on intialisation", () => {
    const { getByText } = render(<App />);

    const findQuoteButton = getByText("Find Quote");
    expect(findQuoteButton).toBeInTheDocument();
  });
});
