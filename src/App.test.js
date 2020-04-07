import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import App from "./App";
import { herokuBackend } from "./api/herokuBackend";
import MockAdapter from "axios-mock-adapter";
const mockAxios = new MockAdapter(herokuBackend);

describe("App", () => {
  mockAxios.onGet("/stocks/AAPL").reply(401);
  it("should show loading gif on initialization", () => {
    const { getByAltText } = render(<App />);
    const loadingSpinner = getByAltText("loadingSpinner");
    expect(loadingSpinner).toBeInTheDocument();
  });

  it("should display dashboard login after page loads", async () => {
    const { getByText, getByPlaceholderText, getByLabelText } = render(<App />);
    await wait(() => {
      expect(getByText("Dashboard Login")).toBeInTheDocument();
    });
    const usernameInput = getByPlaceholderText("username");
    const passwordInput = getByPlaceholderText("password");
    const loginButton = getByLabelText("login button");

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("should login with the right info and display dashboard", async () => {
    const { getByText, getByPlaceholderText, getByLabelText } = render(<App />);
    await wait(() => {
      expect(getByText("Dashboard Login")).toBeInTheDocument();
    });
    const usernameInput = getByPlaceholderText("username");
    const passwordInput = getByPlaceholderText("password");
    fireEvent.change(usernameInput, { target: { value: "stockguru" } });
    fireEvent.change(passwordInput, { target: { value: "123456789" } });
    mockAxios.onPost("/users/login").reply(200);

    const loginButton = getByLabelText("login button");
    fireEvent.click(loginButton);
    await wait(() => {
      expect(
        getByPlaceholderText("Search Stock Ticker Here...")
      ).toBeInTheDocument();
    });
  });

  it("should render registration screen after register button clicked", async () => {
    const { getByText, getByLabelText } = render(<App />);
    await wait(() => {
      expect(getByText("Dashboard Login")).toBeInTheDocument();
    });
    const registerToggle = getByLabelText("register toggle");
    fireEvent.click(registerToggle);

    const registerPage = getByText("New User Registration");
    const registerButton = getByLabelText("register button");
    expect(registerPage).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
