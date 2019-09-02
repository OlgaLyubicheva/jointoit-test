import React from 'react';

import CustomCalendar from './components/customCalendar/CustomCalendar';

import './main.css';

const App = () => {
  
  return (
    <div className="calendar-page">
      <h1>Calendar</h1>

      <CustomCalendar />
    </div>
  );
}

export default App;
