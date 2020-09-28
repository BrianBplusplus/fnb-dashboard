import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import DashboardContainer from "./components/DashboardContainer";
import Faq from "./components/Faq";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import LoginPage from "./components/LoginPage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff7320",
    },
    secondary: {
      main: "#fff",
    },
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route exact path="/dashboard/invoeren" component={InputForm} />
          <Route exact path="/dashboard/faq" component={Faq} />
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
