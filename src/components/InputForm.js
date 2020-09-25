import React from "react";

const InputForm = () => {
  return (
    <form>
      <label for="maandcalender">maandcalender</label>
      <input type="checkbox" id="maandcalender" name="maandcalender" value="maandcalender"></input>
      <br></br>
      <br></br>

      <label for="date">Datum</label>
      <input type="date" id="date" name="date" value="date"></input>

      <br></br>
      <br></br>

      <label for="vestigingen">Vestigingen</label>
      <select name="vestigingen" id="vestigingen">
        <option value="locatie1">Locatie 1</option>
        <option value="locatie2">Locatie 2</option>
        <option value="locatie3">Locatie 3</option>
      </select>

      <br></br>
      <br></br>

      <label for="activiteit">Activiteit</label>
      <input type="text" id="activiteit" name="activiteit" placeholder="Activiteit"></input>

      <br></br>
      <br></br>

      <label for="website">website</label>
      <input type="checkbox" id="website" name="website" value="website"></input>

      <br></br>
      <br></br>

      <label for="activiteit">Aantal</label>
      <input type="text" id="aantal" name="aantal" placeholder="Aantal"></input>

      <br></br>
      <br></br>

      <p>Tijd</p>
      <label for="aanvang">Aanvang</label>
      <input type="time" id="aanvang" naam="aanvang"></input>
      <br></br>
      <label for="einde">Einde</label>
      <input type="time" id="einde" naam="einde"></input>

      <br></br>
      <br></br>

      <label for="doelgroep">Doelgroep</label>
      <select name="doelgroep" id="doelgroep">
        <option value="doelgroep1">Doelgroep 1</option>
        <option value="doelgroep2">Doelgroep 2</option>
        <option value="doelgroep3">Doelgroep 3</option>
      </select>

      <br></br>
      <br></br>

      <label for="soortactiviteit">Soort activiteit</label>
      <select name="soortactiviteit" id="soortactiviteit">
        <option value="soortactiviteit1">Soort activiteit 1</option>
        <option value="soortactiviteit2">Soort activiteit 2</option>
        <option value="soortactiviteit3">Soort activiteit 3</option>
      </select>

      <br></br>
      <br></br>

      <label for="bezoekers">Bezoekers</label>
      <input type="text" id="bezoekers" name="bezoekers" placeholder="Bezoekers"></input>

      <br></br>
      <br></br>

      <label for="projecteigenaar">Projecteigenaar</label>
      <input
        type="text"
        id="projecteigenaar"
        name="projecteigenaar"
        placeholder="Projecteigenaar"
      ></input>

      <br></br>
      <br></br>

      <label for="uitvoering">Uitvoering</label>
      <input type="text" id="uitvoering" name="uitvoering" placeholder="Uitvoering"></input>

      <br></br>
      <br></br>

      <label for="uitvoering">Uitvoering</label>
      <input type="text" id="uitvoering" name="uitvoering" placeholder="Uitvoering"></input>
    </form>
  );
};

export default InputForm;

/*


Voor onze Activiteitenkalender hebben we de volgende velden nodig:

//•	Maandkalender - vink
//•	Datum - kalender
//•	Weekdag - automatisch na kalender
//•	Vestiging - dropdown
//•	Activiteit - vrij veld
//•	Website - vink - moet datum aan gehangen kunnen worden (Als men dit aanvinkt kunnen we in query ‘website’ zien dat het op de website moet en zodra op website is geplaatst zetten we er een datum van plaatsing bij zodat collega’s kunnen zien dat het al op website staat zodat we geen dubbel werk doen)
//•	Aantal - vrij veld (nodig voor Ticketwise)
//•	Aanvang-einde - invulveld tijd
//•	Doelgroep - dropdown
//•	Soort activiteit - dropdown
//•	Bezoekers - vrij veld
//•	Projecteigenaar - vrij veld
//•	Uitvoering - vrij veld
•	Prijs - vrij veld, €
•	Korting - vrij veld
•	Aantal kaarten - vrij veld
•	Kostenplaats - dropdown (geen, E&O, Lelystad, Dronten, Biddinghuizen, Swifterbant, NOP, Urk, Zeewolde, Ondernemers)
•	Persbericht - vrij veld
•	Afbeelding - vrij veld
•	Projectplan - vrij veld

Daarnaast moet er op de site heb volgende komen:
•	Handleiding
•	Veelgestelde vragen
•	Statistieken (dit moet denk ik via Ovatic)
•	Knop per vestiging
•	Knop voor het invullen van bezoekersaantallen (nadat alle bovenstaande velden ingevuld zijn, moet het weer op te roepen zijn, om bezoekersaantallen in te vullen)
•	Knop voor website (wat al is ingevoerd moet niet meer zichtbaar zijn)

*/
