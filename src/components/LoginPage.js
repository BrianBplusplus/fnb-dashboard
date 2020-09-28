import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
      <TextField id="outlined-basic" label="Naam" variant="outlined" />
      <TextField id="outlined-basic" label="Wachtwoord" variant="outlined" type="password" />
      <Button component={Link} to={"/dashboard"} variant="contained" color="primary">
        Inloggen
      </Button>
    </form>
  );
}
