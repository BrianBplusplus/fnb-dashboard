import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashboardContainer from "./components/DashboardContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardContainer} />
      </Switch>
    </Router>
  );
};

export default App;
