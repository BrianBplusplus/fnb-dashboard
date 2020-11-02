import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

import exampleAgenda from "../img/calendarExample.png"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  primaryButton: {
    margin: theme.spacing(1),
    color: "#fff",
  },
}));

const Agenda = () => {
  const classes = useStyles();

  return (
    <div>
      Agenda Prototype

      <img src={exampleAgenda} />

      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.primaryButton}
        component={Link}
        to={"/dashboard/"}
      >
        Terug naar dashboard
      </Button>
    </div>
  );
};

export default Agenda;
