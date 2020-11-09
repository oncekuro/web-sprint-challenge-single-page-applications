import React from "react";
import { Button } from "reactstrap";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import PizzaComponent from "./components/PizzaForm";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Order" component={PizzaComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
