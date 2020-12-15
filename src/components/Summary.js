import React from "react"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 

const Summary = () => {

 const handleDateClick = (arg) => { 
    console.log("Hoi")
  }

  return(
  <div style={{padding: "20px", width: "60%", margin: "0 auto"}}>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        dateClick={() => handleDateClick()}
        events={[
          { title: 'Kinderboekenweek', date: '2020-12-01' },
          { title: 'Kinderboekenweek', date: '2020-12-02' },
          { title: 'Feestactivtiteiten', date: '2020-12-02' },

          { title: "filler", date: "2020-12-16"},
          { title: "filler", date: "2020-12-16"},
          { title: "filler", date: "2020-12-16"},
          { title: "filler", date: "2020-12-16"},


          { title: "Nieuwjaar evenement", date: "2020-12-31"}
        ]}
      />
  </div>)



}

export default Summary