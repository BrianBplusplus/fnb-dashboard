import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Checkbox from '@material-ui/core/Checkbox';

import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 110,
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "25%",
    padding: "20px",
    margin: "10px",
    backgroundColor: "#f7f7f7"
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const InputForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.formControl}>
      <Card className={classes.card} variant="outlined">
        <h2>Locatiegegevens</h2>

        <label htmlFor="activiteit">Activiteit</label><br></br>
        <input type="text" id="activiteit" name="activiteit" placeholder="Activiteit"></input>

        <br></br>
        <br></br>

        <label htmlFor="date">Datum</label><br></br>
        <input type="date" id="date" name="date"></input>

    <br></br>
    <br></br>

        <label htmlFor="vestigingen">Vestigingen</label><br></br>
        <select name="vestigingen" id="vestigingen">
          <option value="locatie1">Locatie 1</option>
          <option value="locatie2">Locatie 2</option>
          <option value="locatie3">Locatie 3</option>
        </select>

        <br></br>
        <br></br>

        <p>Tijd</p>
        <label htmlFor="aanvang">Aanvang</label><br></br>
        <input type="text" id="aanvang" name="aanvang" placeholder="Aanvang"></input>
        <br></br>
        <label htmlFor="einde">Einde</label><br></br>
        <input type="text" id="einde" name="einde" placeholder="Einde"></input>

        <br></br>
      <br></br>

        <label htmlFor="maandkalender">Maandkalender</label>
        <input type="checkbox" id="maandkalender" name="maandkalender"></input>

        <br></br>
        <br></br>

        <label htmlFor="website">Website</label><br></br>
        <input type="checkbox" id="website" name="website" value="website"></input>

      </Card>
      <br></br>
      <br></br>
      <Card className={classes.card} variant="outlined">
        <h2>Doelgroep</h2>
        <label htmlFor="doelgroep">Doelgroep</label><br></br>
        <select name="doelgroep" id="doelgroep">
          <option value="doelgroep1">Doelgroep 1</option>
          <option value="doelgroep2">Doelgroep 2</option>
          <option value="doelgroep3">Doelgroep 3</option>
        </select>

        <br></br>
        <br></br>

        <label htmlFor="soortactiviteit">Soort activiteit</label><br></br>
        <select name="soortactiviteit" id="soortactiviteit">
          <option value="soortactiviteit1">Soort activiteit 1</option>
          <option value="soortactiviteit2">Soort activiteit 2</option>
          <option value="soortactiviteit3">Soort activiteit 3</option>
        </select>

        <br></br>
        <br></br>

        <label htmlFor="bezoekers">Bezoekers</label><br></br>
        <input type="text" id="bezoekers" name="bezoekers" placeholder="Bezoekers"></input>

        <br></br>
        <br></br>

        <label htmlFor="activiteit">Aantal</label><br></br>
        <input type="text" id="aantal" name="aantal" placeholder="Aantal"></input>

        <br></br>
        <br></br>

        <label htmlFor="projecteigenaar">Projecteigenaar</label>
        <input
          type="text"
          id="projecteigenaar"
          name="projecteigenaar"
          placeholder="Projecteigenaar"
        ></input>




      </Card>
      <br></br>
      <br></br>
      <Card className={classes.card} variant="outlined">
        <h2>Intern</h2>
        <label htmlFor="uitvoering">Uitvoering</label><br></br>
        <input type="text" id="uitvoering" name="uitvoering" placeholder="Uitvoering"></input>

        <br></br>
        <br></br>

        <label htmlFor="prijs">Prijs</label><br></br>
        <input type="text" id="prijs" name="prijs" placeholder="Prijs"></input>

        <br></br>
        <br></br>

        <label htmlFor="prijs">Korting</label><br></br>
        <input type="text" id="korting" name="korting" placeholder="Korting"></input>

        <br></br>
        <br></br>

        <label htmlFor="prijs">Aantal kaarten</label>
        <input
          type="text"
          id="aantalkaarten"
          name="aantal kaarten"
          placeholder="Aantal kaarten"
        ></input>

        <br></br>
        <br></br>

        <label htmlFor="prijs">Kostenplaats</label><br></br>
        <input type="text" id="kostenplaats" name="kostenplaats" placeholder="Kostenplaats"></input>

        <br></br>
        <br></br>

        <label htmlFor="prijs">Persbericht</label><br></br>
        <input type="text" id="persbericht" name="persbericht" placeholder="Persbericht"></input>

        <br></br>
        <br></br>

        <label htmlFor="prijs">Afbeelding</label><br></br>
        <input type="text" id="afbeelding" name="afbeelding" placeholder="Afbeelding"></input>

        <br></br>
        <br></br>

        <label htmlFor="prijs">Projectplan</label><br></br>
        <input type="text" id="projectplan" name="projectplant" placeholder="projectplan"></input>
      </Card>

      <Tooltip title="Activiteit Toevoegen" aria-label="Activiteit toevoegen">
        <Fab color="primary " className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </form>

    

  );
};

export default InputForm;
