import React from "react";
import { PostLogin } from "../api/herokuBackend";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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

  render() {
    return (
      <div>
        <h1>Stockuote Dashboard Login</h1>
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
          <button onClick={PostLogin(this.state.username, this.state.password)}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
