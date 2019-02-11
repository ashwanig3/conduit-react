import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    passord: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form className="signup-form">
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="passord"
            name="password"
            onChange={this.handleChange}
          />
          <button>Signup</button>
        </form>
      </div>
    );
  }
}
