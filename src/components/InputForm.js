import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "flex",
    justifyContent: "space-around",
  },
  card: {
    width: "33%",
    textAlign: "center",
  },
}));

const InputForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.formControl}>
      <Card className={classes.card}>
        <h2>Locatiegegevens</h2>
        <label htmlFor="maandkalender">Maandkalender</label><br></br>
        <input type="checkbox" id="maandkalender" name="maandkalender"></input>

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

        <label htmlFor="activiteit">Activiteit</label>
        <input type="text" id="activiteit" name="activiteit" placeholder="Activiteit"></input>

        <br></br>
        <br></br>

        <label htmlFor="website">Website</label>
        <input type="checkbox" id="website" name="website" value="website"></input>

        <br></br>
        <br></br>

        <label htmlFor="activiteit">Aantal</label>
        <input type="text" id="aantal" name="aantal" placeholder="Aantal"></input>

        <br></br>
        <br></br>

        <p>Tijd</p>
        <label htmlFor="aanvang">Aanvang</label>
        <input type="time" id="aanvang" naam="aanvang"></input>
        <br></br>
        <label htmlFor="einde">Einde</label>
        <input type="time" id="einde" naam="einde"></input>
      </Card>
      <br></br>
      <br></br>
      <Card className={classes.card}>
        <h2>Doelgroep</h2>
        <label htmlFor="doelgroep">Doelgroep</label>
        <select name="doelgroep" id="doelgroep">
          <option value="doelgroep1">Doelgroep 1</option>
          <option value="doelgroep2">Doelgroep 2</option>
          <option value="doelgroep3">Doelgroep 3</option>
        </select>

        <br></br>
        <br></br>

        <label htmlFor="soortactiviteit">Soort activiteit</label>
        <select name="soortactiviteit" id="soortactiviteit">
          <option value="soortactiviteit1">Soort activiteit 1</option>
          <option value="soortactiviteit2">Soort activiteit 2</option>
          <option value="soortactiviteit3">Soort activiteit 3</option>
        </select>

        <br></br>
        <br></br>

        <label htmlFor="bezoekers">Bezoekers</label>
        <input type="text" id="bezoekers" name="bezoekers" placeholder="Bezoekers"></input>

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
      <Card className={classes.card}>
        <h2>Personeel</h2>
        <label htmlFor="uitvoering">Uitvoering</label>
        <input type="text" id="uitvoering" name="uitvoering" placeholder="Uitvoering"></input>

        <br></br>
        <br></br>

        <label htmlFor="prijs">Prijs</label>
        <input type="text" id="prijs" name="prijs" placeholder="Prijs"></input>

        <br></br>
        <br></br>

        <label htmlFor="prijs">Korting</label>
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

        <label htmlFor="prijs">Kostenplaats</label>
        <input type="text" id="kostenplaats" name="kostenplaats" placeholder="Kostenplaats"></input>

        <br></br>
        <br></br>

        <label htmlFor="prijs">Persbericht</label>
        <input type="text" id="persbericht" name="persbericht" placeholder="Persbericht"></input>

        <br></br>
        <br></br>

        <label htmlFor="prijs">Afbeelding</label>
        <input type="text" id="afbeelding" name="afbeelding" placeholder="Afbeelding"></input>

        <br></br>
        <br></br>

        <label htmlFor="prijs">Projectplan</label>
        <input type="text" id="projectplan" name="projectplant" placeholder="projectplan"></input>
      </Card>
    </form>
  );
};

export default InputForm;
