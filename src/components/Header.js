import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to={"/dashboard/"} onClick={handleClose}>
              Dashboard
            </MenuItem>
            <MenuItem component={Link} to={"/dashboard/invoeren"} onClick={handleClose}>
              Nieuwe Activiteit
            </MenuItem>
            <MenuItem component={Link} to={"/dashboard/agenda"} onClick={handleClose}>
              Agenda
            </MenuItem>
            <MenuItem component={Link} to={"/dashboard/handleiding"} onClick={handleClose}>
              Handleiding
            </MenuItem>
            <MenuItem component={Link} to={"/dashboard/faq"} onClick={handleClose}>
              FAQ
            </MenuItem>
          </Menu>

          <Typography
            component={Link}
            to={"/dashboard"}
            color="secondary"
            variant="h6"
            className={classes.title}
          >
            Activiteiten kalender
          </Typography>

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
