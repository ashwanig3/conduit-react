import React, { Component } from "react";
import { connect } from "react-redux";
import { signupUser } from "../actionCreator/action";

class Signup extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(signupUser(this.state));
  };
  render() {
    return (
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
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

export default connect()(Signup);
