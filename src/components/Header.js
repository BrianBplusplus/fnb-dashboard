import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
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
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            to={"/dashboard"}
            color="secondary"
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
            color="secondary"
          >
            Nieuwe activiteit toevoegen
          </Button>

          <Button
            className={classes.menuLinks}
            component={Link}
            to={"/dashboard/agenda"}
            variant="contained"
            color="secondary"
          >
            Agenda
          </Button>

          <Button
            className={classes.menuLinks}
            component={Link}
            to={"/dashboard/handleiding"}
            variant="contained"
            color="secondary"
          >
            Handleiding
          </Button>

          <Button
            className={classes.menuLinks}
            component={Link}
            to={"/dashboard/faq"}
            variant="contained"
            color="secondary"
          >
            Veelgestelde vragen
          </Button>

          <Button
            className={classes.menuLinks}
            component={Link}
            to={"/"}
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
