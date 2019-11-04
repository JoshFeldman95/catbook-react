import React, { Component } from "react";
import NavBar from "./modules/NavBar.js";
import Feed from "./pages/Feed.js";
import NotFound from "./pages/NotFound.js";
import Profile from "./pages/Profile.js";
import { Route, Switch, withRouter } from "react-router-dom";

// to use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
  }

  // required method: whatever is returned defines what
  // shows up on screen
  render() {
    return (
      // <React.Fragment> is like a <div>, but won't show
      // up in the DOM tree
      <React.Fragment>
        <NavBar />
        <div className="App-container">
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route exact path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

// Wrap our "App" component in withRouter to provide
// access to Router props
export default withRouter(App);
