import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";

import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Contests from "./Pages/Contests.js";
import Enter from "./Pages/Enter.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PageContent></PageContent>
      <Footer></Footer>
    </div>
  );
}

function PageContent() {
  return (
    <div className="PageContent">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contests" component={Contests} />
        <Route path="/enter" exact component={Enter} />
      </Switch>
    </div>
  );
}

export default App;
