import React from "react";

const InputForm = () => {
  return (
    <form>
      <label htmlFor="maandcalender">maandcalender</label>
      <input type="checkbox" id="maandcalender" name="maandcalender"></input>

      <br></br>
      <br></br>

      <label htmlFor="date">Datum</label>
      <input type="date" id="date" name="date"></input>

      <br></br>
      <br></br>

      <label htmlFor="vestigingen">Vestigingen</label>
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

      <label htmlFor="website">website</label>
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

      <br></br>
      <br></br>

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

      <br></br>
      <br></br>

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
      <input type="text" id="aantalkaarten" name="aantal kaarten" placeholder="Aantal kaarten"></input>

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

      <label htmlFor="prijs">Projectplant</label>
      <input type="text" id="projectplan" name="projectplant" placeholder="projectplan"></input>
    </form>
  );
};

export default InputForm;
