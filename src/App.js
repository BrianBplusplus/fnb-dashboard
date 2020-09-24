import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Testcomponent from "./components/Testcomponent";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Testcomponent} />
      </Switch>
    </Router>
  );
};

export default App;
