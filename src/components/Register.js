import React from "react";
import RegisterUser from "../api/herokuBackend";

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

  onChangeLasttName = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  onChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>New User Registration</h1>
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
              onnChange={this.onChangePassword}
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
          <button
            onClick={RegisterUser(
              this.state.username,
              this.state.password,
              this.state.firstName,
              this.state.lastName,
              this.state.email
            )}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
