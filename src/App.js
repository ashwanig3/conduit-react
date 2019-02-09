import React, { Component } from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { connect } from "react-redux";
import { setArticles, getTags } from "./actionCreator/action";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Tag from "./components/Tag";

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(setArticles());
    this.props.dispatch(getTags());
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Articles} />
            <Route path="/:user" exact component={Profile} />
            <Route path="/articles/:tag" exact component={Tag} />
          </Switch>
          {/* <Articles /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
