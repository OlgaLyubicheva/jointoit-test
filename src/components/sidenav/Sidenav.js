import React from 'react';

const Sidenav = () => (
  <aside className="sidenav">
    <div className="sidenav__title">
      <a href="#/">
        IMPEKABLE
      </a>
    </div>

    <nav className="sidenav__nav">
      <a href="#/">
        <img src="./img/home.svg" alt="Home"/>
        Home
      </a>
      <a href="#/">
        <img src="./img/dashboard.svg" alt="Dashboard"/>
        Dashboard
      </a>
      <a href="#/">
        <img src="./img/inbox.svg" alt="Inbox"/>
        Inbox
      </a>
      <a href="#/">
        <img src="./img/products.svg" alt="Products"/>
        Products
      </a>
      <a href="#/">
        <img src="./img/invoices.svg" alt="Invoices"/>
        Invoices
      </a>
      <a href="#/">
        <img src="./img/customers.png" alt="Customers"/>
        Customers
      </a>
      <a href="#/">
        <img src="./img/chat.png" alt="Room"/>
        Chat Room
      </a>
      <a href="#/" className="active-link">
        <img src="./img/calendar.svg" alt="Calendar"/>
        Calendar
      </a>
      <a href="#/">
        <img src="./img/support.svg" alt="Help Center"/>
        Help Center
      </a>
      <a href="#/">
        <img src="./img/settings.svg" alt="Settings"/>
        Settings
      </a>
    </nav>
  </aside>
);

export default Sidenav;
