import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";

// components
import FormEvent from '../formEvent/FormEvent';

const CustomCalendar = () => {
  const [events, setEvent] = useState([
    {
      id: 1,
      title: 'my event',
      start: '2019-08-29T14:30:00',
      datestart: '2019-08-29',
      time: '14:30:00'
    },
    {
      id: 2,
      title: 'my event',
      start: '2019-08-30T22:15:00',
      datestart: '2019-08-30',
      time: '22:15:00'
    }
  ]);

  const [formStatus, setFormStatus] = useState({
    form: '', event: {}, position: { top: '', left: '' }
  });

  const handleDateClick = (arg) => {
    setFormStatus({
      form: 'add',
      event: {},
      position: {
        top: arg.jsEvent.pageY,
        left: arg.jsEvent.pageX - 100.5 }
      });
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

  const updEvent = (arg) => {
    const newEvent = events.find(curEvent => curEvent.id === +arg.event.id);

    setFormStatus({
      form: 'upd',
      event: newEvent,
      position: {
      top: arg.jsEvent.pageY,
      left: arg.jsEvent.pageX - 100.5 }
    });
  }

  const handleDrop = (dropEvent) => {
    const newEvent = events.find(curEvent => curEvent.id === +dropEvent.id);

    let newDate = dropEvent.start.toLocaleDateString().split('.').reverse().join('-');
    const newTime = dropEvent.start.toLocaleTimeString();

    newEvent.datestart = newDate;
    newEvent.time = newTime;
    newEvent.start = `${newDate}T${newTime}`;
    newEvent.forPicker = dropEvent.start;
  }

  return (
    <div className="calendar-box">
      <h2 className="calendar-box--view">
        Calendar view
      </h2>
      <FullCalendar
        defaultView='dayGridMonth'
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
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
        views={{
          dayGridMonth: {
            titleFormat: {
              month: 'long',
              year: 'numeric'
            },
            columnHeaderText: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
            eventLimit: 3,           
          },
          timeGridWeek: {
            titleFormat: {
              month: 'short',
              day: 'numeric',
            },
            slotLabelFormat: {
              hour: 'numeric',
              minute: '2-digit',
              meridiem: 'short'
            },
            eventLimit: 2,
          },
          timeGridDay: {
            titleFormat: {
              month: 'short',
              day: 'numeric',
              weekday: 'long'
            },
            slotLabelFormat: {
              hour: 'numeric',
              minute: '2-digit',
              meridiem: 'short'
            },
            eventLimit: 2,
          }
        }}
        navLinks={true}
        events={events}
        editable={true}
        displayEventTime={false}
        eventClick={(arg) => updEvent(arg)}
        dateClick={handleDateClick}
        eventDrop={({event}) => handleDrop(event)}
      />

      {
        formStatus.form !== '' &&
        <FormEvent onSave={addEvent} onClouse={setFormStatus} form={formStatus} />
      }
    </div>
  );
}

export default CustomCalendar;