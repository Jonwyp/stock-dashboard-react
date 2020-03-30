import React from "react";
import LoginScreen from "./containers/LoginScreen";
import Dashboard from "./containers/Dashboard";
import { herokuBackend } from "./api/herokuBackend";
import LoaderSpinner from "./components/LoaderSpinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isLoading: true
    };
  }

  componentDidMount() {
    this.checkLogin();
  }

  checkLogin = async () => {
    try {
      const res = await herokuBackend.get("/stocks/AAPL");
      if (res.status === 200) {
        this.setState({ isLoggedIn: true });
      }
      this.setState({ isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div className="app">
        {this.state.isLoading && <LoaderSpinner />}
        {!this.state.isLoggedIn && !this.state.isLoading && (
          <LoginScreen parentProps={this} />
        )}
        {this.state.isLoggedIn && !this.state.isLoading && (
          <Dashboard parentProps={this} />
        )}
      </div>
    );
  }
}

export default App;
