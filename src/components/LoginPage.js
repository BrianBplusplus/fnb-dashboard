import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "0 auto 10px",
      width: "25ch",
      display: "flex",
    },
  },
  h1: {
    textAlign: "center",
  },
  primaryButton: {
    color: "#fff",
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.h1}>Activiteiten Kalender</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField label="Naam" variant="outlined" />
        <TextField label="Wachtwoord" variant="outlined" type="password" />
        <Button
          variant="contained"
          color="primary"
          className={classes.primaryButton}
          component={Link}
          to={"/dashboard"}
        >
          Inloggen
        </Button>
      </form>
    </div>
  );
}
