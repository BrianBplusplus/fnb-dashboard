import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const DashboardContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>FNB-Dashboard</h1>
      <ButtonGroup color="primary" aria-label="large outlined primary button group">
        <Button component={Link} to={"/dashboard/invoeren"}>
          Nieuwe activiteit toevoegen
        </Button>
        <Button component={Link} to={"/dashboard/agenda"}>
          Agenda bekijken
        </Button>
        <Button component={Link} to={"/dashboard/handleiding"}>
          Handleiding
        </Button>
        <Button component={Link} to={"/dashboard/faq"}>
          Veelgestelde vragen
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default DashboardContainer;
