import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashboardContainer from "./components/DashboardContainer";
import Faq from "./components/Faq";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/dashboard/invoeren" component={InputForm} />
        <Route exact path="/dashboard/faq" component={Faq} />
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default App;
