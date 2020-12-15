import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  primaryButton: {
    margin: theme.spacing(1),
    color: "#fff",
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Kinderboekenweek', 20062020, 15, "Biddinghuizen"),
  createData('Kinderboekenweek', 20062020, 1, "Biddinghuizen"),
  createData('Kinderboekenweek', 20062020, 125, "Dronten"),
  createData('Kinderboekenweek', 20062020, 12, "Biddinghuizen"),
  createData('Kinderboekenweek', 20062020, 23, "Biddinghuizen"),
];

const monthNames = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
const date = new Date();
const currentMonth = monthNames[date.getMonth()]

const Agenda = () => {
  const classes = useStyles();

  return (
    <div style={{ height: 520, width: '70%', margin: "0 auto"}}>
   
   <p>Activiteiten voor {currentMonth}</p>

      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Activiteit</TableCell>
            <TableCell align="right">Datum</TableCell>
            <TableCell align="right">Aantal Deelnemers</TableCell>
            <TableCell align="right">Vestiging</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.primaryButton}
        component={Link}
        to={"/dashboard/overzicht"}
      >
        Overzicht alle maanden
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.primaryButton}
        component={Link}
        to={"/dashboard/"}
      >
        Terug naar dashboard
      </Button>
    </div>
  );
};

export default Agenda;


