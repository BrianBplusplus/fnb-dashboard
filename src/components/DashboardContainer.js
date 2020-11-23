import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import EventsContainer from "./EventsContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  primaryButton: {
    margin: theme.spacing(1),
    color: "#fff",
  },
  secondaryButton: {
    margin: theme.spacing(1),
  },
}));

const monthNames = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
const date = new Date();
const currentMonth = monthNames[date.getMonth()]

const DashboardContainer = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <h1>Activiteitenkalender</h1>

      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.primaryButton}
          startIcon={<AddIcon />}
          component={Link}
          to={"/dashboard/invoeren"}
        >
          Nieuwe Activiteit Toevoegen
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.primaryButton}
          component={Link}
          to={"/dashboard/agenda"}
          startIcon={<CalendarTodayIcon />}
        >
          Agenda
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          color="default"
          size="large"
          className={classes.secondaryButton}
          component={Link}
          to={"/dashboard/handleiding"}
          startIcon={<MenuBookIcon />}
        >
          Handleiding
        </Button>

        <Button
          variant="contained"
          color="default"
          size="large"
          className={classes.secondaryButton}
          component={Link}
          to={"/dashboard/faq"}
          startIcon={<LiveHelpIcon />}
        >
          Veelgestelde Vragen
        </Button>
      </div>
      <p>Activiteiten voor {currentMonth}</p>
      <EventsContainer />
    </div>
  );
};

export default DashboardContainer;
