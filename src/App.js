import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Faveroite from "./component/Faveroite";
import Header from "./component/Header";
import Home from "./component/Home";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/fav">
              <Faveroite />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
