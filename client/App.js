import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Reddit from "./Components/Reddit/Reddit";
import Home from "./Components/Fillers/Home";
import About from "./Components/Fillers/About";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/reddit" exact component={Reddit} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default hot(module)(App);
