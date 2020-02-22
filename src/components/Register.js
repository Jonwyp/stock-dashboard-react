import React from "react";
import { herokuBackend } from "../api/herokuBackend";
import Login from "./Login";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    };
  }
  onChangeUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  onChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  onChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  RegisterUser = async event => {
    let payload = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    };
    const res = await herokuBackend.post("/users/register", payload);
    if (res.data.code === 200) {
      let loginScreen = [];
      loginScreen.push(<Login parentProps={this} />);
      let loginMessage = "Not Registered yet. Go to registration";
      this.props.parentContext.setState({
        loginScreen: loginScreen,
        loginMessage: loginMessage,
        buttonLabel: "Register",
        isLogin: true
      });
      console.log(res.data);
    }
  };

  render() {
    return (
      <div>
        <h2>New User Registration</h2>
        <div>
          <span>
            username:{" "}
            <input
              type="text"
              placeholder="username"
              onChange={this.onChangeUsername}
            />
          </span>
          <br />
          <span>
            password:{" "}
            <input
              type="text"
              placeholder="password"
              onChange={this.onChangePassword}
            />
          </span>
          <br />
          <span>
            first name:{" "}
            <input
              type="text"
              placeholder="first name"
              onChange={this.onChangeFirstName}
            />
          </span>
          <br />
          <span>
            last name:{" "}
            <input
              type="text"
              placeholder="last name"
              onChange={this.onChangeLastName}
            />
          </span>
          <br />
          <span>
            email:{" "}
            <input
              type="text"
              placeholder="email"
              onChange={this.onChangeEmail}
            />
          </span>
          <br />
          <button onClick={event => this.RegisterUser(event)}>Register</button>
        </div>
      </div>
    );
  }
}

export default Register;
