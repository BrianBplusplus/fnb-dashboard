import React, { useState, useEffect } from "react";
import axios from "axios";
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
  bottomRightBox: {
    position: "absolute",
    bottom: "0",
    right: "0"
  }
}));

const monthNames = [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "December",
];
const date = new Date();
const currentMonth = monthNames[date.getMonth()];
const accessToken = "gWTp4m8wLpOXIBH/vAGJjQPBXeyYQ1VymISGhqLF37Y4P2R3p4WS3/GKNRmbdG8o5A0XfMAVuycu3RCmA5p6Eg=="

const DashboardContainer = () => {
  const classes = useStyles();
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchAPI = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(`https://api.trs-suite.com:443/hosting/repository/locations/1442`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data)
      setApiData(response.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    setIsLoading(false);
  };
  
  useEffect(() => {
    fetchAPI();
  }, []);

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
      <p>Activiteiten voor {currentMonth}</p>
      <EventsContainer />
      <div className={classes.bottomRightBox}>
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

    </div>
  );
};

export default DashboardContainer;
