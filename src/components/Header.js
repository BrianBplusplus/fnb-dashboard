import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
  },
  menuLinks: {
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            to={"/dashboard"}
            color="inherit"
            variant="h6"
            className={classes.title}
          >
            FNB-Dashboard
          </Typography>

          <Button
            className={classes.menuLinks}
            component={Link}
            to={"/dashboard/invoeren"}
            variant="contained"
            color="primary"
          >
            Nieuwe activiteit toevoegen
          </Button>

          <Button
            className={classes.menuLinks}
            component={Link}
            to={"/dashboard/agenda"}
            variant="contained"
            color="primary"
          >
            Agenda
          </Button>

          <Button
            className={classes.menuLinks}
            component={Link}
            to={"/dashboard/faq"}
            variant="contained"
            color="primary"
          >
            Veelgestelde vragen
          </Button>

          <Button
            className={classes.menuLinks}
            component={Link}
            to={"/"}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
