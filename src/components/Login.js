import React from "react";
import { herokuBackend } from "../api/herokuBackend";
import { Button } from "semantic-ui-react";

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

  PostLogin = async () => {
    let payload = {
      username: this.state.username,
      password: this.state.password
    };
    const res = await herokuBackend.post("/users/login", payload);
    if (res.status === 200) {
      this.props.appProps.setState({ isLoggedIn: true });
    }
    return res.data;
  };

  render() {
    return (
      <div>
        <h2>Dashboard Login</h2>
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
              type="password"
              placeholder="password"
              onChange={this.onChangePassword}
            />
          </span>
          <br />
          <Button
            aria-label="login button"
            size="mini"
            onClick={event => this.PostLogin(event)}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
