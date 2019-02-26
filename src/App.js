import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Mac from "./components/Mac/Mac";
import iPad from "./components/iPad/iPad";
import iPhone from "./components/iPhone/iPhone";
import Watch from "./components/Watch/Watch";
import Tv from "./components/TV/Tv";
import Music from "./components/Music/Music";
import Support from "./components/Support/Support";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Apple</h1>
        <Home />
        <Route path="/mac" component={Mac} />
        <Route path="/ipad" component={iPad} />
        <Route path="/iphone" component={iPhone} />
        <Route path="/watch" component={Watch} />
        <Route path="/tv" component={Tv} />
        <Route path="/music" component={Music} />
        <Route path="/support" component={Support} />
      </div>
    );
  }
}

export default App;
