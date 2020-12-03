import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  banner: {
    border: "1px solid black",
    width: "95%",
    height: "100px",
    textAlign: "center",
    lineHeight: "100px",
  },
  information: {
    display: "flex",
    border: "1px solid black",
    width: "95%",
    height: "300px",
  },
  informationLeft: {
    border: "1px solid black",
    width: "70%",
    margin: "5px",
    padding: "5px",
  },
  informationRight: {
    border: "1px solid black",
    width: "30%",
    margin: "5px",
  },
}));

const DetailPageContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.banner}>Kinderboeken Week</div>
      <div className={classes.information}>
        <div className={classes.informationLeft}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborumn
        </div>
        <div className={classes.informationRight}>
          <ul>
            ProjectTeam
            <li>Projectleider: Brian</li>
            Teamleden
            <li>Margriet</li>
            <li>Daniel</li>
            <li>Tjarko</li>
            <li>Polly</li>
          </ul>
        </div>
      </div>
      <div>Messages</div>
    </div>
  );
};

export default DetailPageContainer;
