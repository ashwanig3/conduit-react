import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <a href="#" className="app-home">
            Conduit
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Signup</a>
            </li>
          </ul>
        </nav>
        <div className="hero">
          <div className="hero-description">
            <h1>Conduit</h1>
            <span>A place to share your knowledge.</span>
          </div>
        </div>
      </div>
    );
  }
}
