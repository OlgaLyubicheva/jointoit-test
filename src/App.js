import React from 'react';

import Sidenav from './components/sidenav/Sidenav';
import Header from './components/header/Header';
import CustomCalendar from './components/customCalendar/CustomCalendar';

import './main.css';

const App = () => {
  
  return (
    <div style={{display: 'flex'}}>
      <Sidenav />

      <div>
        <Header />

        <div className="calendar-page">
          <h1>Calendar</h1>

          <CustomCalendar />
        </div>
      </div>
    </div>
  );
}

export default App;
