import React, { Component } from "react";
import "./App.css";
import LeafletMap from "./components/LeafletMap";

class App extends Component {
  render() {
    return (
      <div id="container">
        <LeafletMap />
      </div>
    );
  }
}

export default App;