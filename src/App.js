import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/footer/footer.js";
import Main from "./components/mainpage/main.js";
import Navbar from "./components/navbar/navbar.js";
import Portfolio from "./components/portfolio/portfolio.js";
import About from "./components/about/about.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="page-wrapper">
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Main></Main>
            </Route>
            <Route exact path="/portfolio">
              <Portfolio></Portfolio>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
