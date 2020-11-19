import React from "react"
import Events from "./Events"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const EventsContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Events />
          <Events />
          <Events />
    </div>)
}

export default EventsContainer