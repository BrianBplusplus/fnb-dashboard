import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Naam" variant="outlined" />
      <TextField label="Wachtwoord" variant="outlined" type="password" />
      <Button component={Link} to={"/dashboard"} variant="contained" color="primary">
        Inloggen
      </Button>
    </form>
  );
}
