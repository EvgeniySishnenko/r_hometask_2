import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Store from "./components/Store/Store";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/Store" component={Store} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
