import React, { Component } from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Articles />
      </div>
    );
  }
}

export default App;
