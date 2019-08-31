import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";

import './main.css';
import FormEvent from './FormEvent';

const App = () => {
  const [events, setEvent] = useState([
    {
      id: 1,
      title: 'my event',
      start: '2019-08-29'
    },
    {
      id: 2,
      title: 'my event',
      start: '2019-08-30'
    }
  ]);

  const [formStatus, setFormStatus] = useState({form: '', event: {}, position: {top: '', left: ''}});

  const handleDateClick = (arg) => {
    setFormStatus({form: 'add', event: {}, position: {top: arg.jsEvent.pageY, left: arg.jsEvent.pageX - 205}});
  }

  const addEvent = (newEvent, action) => {
    const newEvents = events.filter(curEvent => curEvent.id !== newEvent.id);

    switch (action) {
      case 'upd':
        setEvent([...newEvents, newEvent]);
        break;
      case 'add':
        setEvent([
          ...events,
          {
            ...newEvent,
            id: events.length + 1 
          },
        ]);
        break;
      case 'del':
        setEvent([...newEvents]);
        break;
      default:
        break;
    }
  }

  const updEvent = (eventId) => {
    const newEvent = events.find(curEvent => curEvent.id === +eventId);

    setFormStatus({form: 'upd', event: newEvent});
  }

  return (
    <div>
      <div>
        Calendar view
      </div>
      <FullCalendar
        defaultView='dayGridMonth'
        plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ]}
        header={{
          left: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          center: 'today,prev,next',
          right: 'title'
        }}
        buttonText={{
          prev: "Back",
          next: "Next",
          today: "Today",
          dayGridMonth: "Month",
          timeGridWeek: "Week",
          timeGridDay: "Day",
          listWeek: "Agenda"
        }}
        events={events}
        eventClick={({event}) => updEvent(event.id)}
        dateClick={handleDateClick}
      />

      {
        formStatus.form !== '' &&
        <FormEvent onSave={addEvent} onClouse={setFormStatus} form={formStatus} />
      }
    </div>
  );
}

export default App;
