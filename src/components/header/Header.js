import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header__search">
      <img src="./img/search.svg" alt="search"/>
      <input type="search" placeholder="Search transactions, invoices or help" />
    </div>

    <div className="header__left">
      <div className="header__link-group">
        <a href="#/">
          <img src="./img/support.svg" alt="Help Center"/>
        </a>
        <a href="#/">
          <img src="./img/hchat.svg" alt="Chat Room"/>
        </a>
        <div className="notification">
          <div className="notification-new" />
          <a href="#/">
            <img src="./img/notification.svg" alt="Notification"/>
          </a>
        </div>
      </div>

      <div className="header__user">
        <button type="button" className="header__user--info">
          John Doe
          <img src="./img/info.svg" alt="" ariaHidden={true} />
        </button>

        <div className="header__user--img">
          <img src="./img/Avatar@2x.png" alt="userpic"/>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
