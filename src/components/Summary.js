import React from "react"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 

const Summary = () => {

 const handleDateClick = (arg) => { 
    console.log("Hoi")
  }

  return(
  <div>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        dateClick={() => handleDateClick()}
        events={[
          { title: 'Kinderboekenweek', date: '2020-12-01' },
          { title: 'Kinderboekenweek', date: '2020-12-02' }
        ]}
      />
  </div>)



}

export default Summary