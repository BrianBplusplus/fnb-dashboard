import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import DashboardContainer from "./components/DashboardContainer";
import Faq from "./components/Faq";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import LoginPage from "./components/LoginPage";
import Agenda from "./components/Agenda";
import Summary from "./components/Summary"
import DetailPageContainer from "./components/DetailPageContainer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff7320",
    },
    secondary: {
      main: "#fff",
    },
    tertiary: {
      main: "#ff7320",
      secondary: "#fff"
    }
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
          <Route exact path="/dashboard/agenda" component={Agenda} />
          <Route exact path="/dashboard/faq" component={Faq} />
          <Route exact path="/dashboard/activiteit/kinderboekenweek" component={DetailPageContainer} />
          <Route exact path="/dashboard/overzicht" component={Summary} />
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
