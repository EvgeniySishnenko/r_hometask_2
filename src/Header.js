import React from "react";
import Nav from "./Nav";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="container">
          <div className="top-bar animate-dropdown">
            <h1 className="h1-title">hometask 2</h1>
          </div>
          <Nav />
        </div>
      </header>
    );
  }
}
export default Header;
