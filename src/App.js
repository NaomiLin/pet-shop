import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";

const ToysPage = () => (
  <div>
    <h1>Toys Page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch> 
        <Route exact path="/" component={HomePage} />
        <Route path="/toys" component={ToysPage} />
      </Switch>
    </div>
  );
}

export default App;
