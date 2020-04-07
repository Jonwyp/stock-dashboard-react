import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import "./LoginScreen.css";
import { Button } from "semantic-ui-react";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      buttonLabel: "Register",
      loginScreen: [
        <Login
          key="Login"
          parentProps={this}
          appProps={this.props.parentProps}
        />
      ],
      loginMessage: "Not a registered user? Register now!",
      isLogin: true
    };
  }

  onClickGoRegister = () => {
    if (this.state.isLogin) {
      let loginMessage = "";
      let loginScreen = [];
      loginScreen.push(<Register key="register" parentProps={this} />);
      loginMessage = "Already registered? Proceed to login!";
      this.setState({
        loginScreen: loginScreen,
        loginMessage: loginMessage,
        buttonLabel: "Login",
        isLogin: false
      });
    } else {
      let loginMessage = "";
      let loginScreen = [];
      loginScreen.push(<Login parentProps={this} />);
      loginMessage = "User not registered. Proceed to login!";
      this.setState({
        loginScreen: loginScreen,
        loginMessage: loginMessage,
        buttonLabel: "Register",
        isLogin: true
      });
    }
  };
  render() {
    return (
      <div className="loginScreen">
        <div className="header">
          <img
            className="header-companylogo"
            src={`${process.env.PUBLIC_URL}/stockuote.png`}
            alt="Company logo"
          />
          <span className="search">
            <h1>U.S. Stocks Dashboard</h1>
          </span>
        </div>
        {this.state.loginScreen}
        <div>{this.state.loginMessage}</div>
        <div>
          <Button
            aria-label="register toggle"
            size="mini"
            onClick={this.onClickGoRegister}
          >
            {this.state.buttonLabel}
          </Button>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
