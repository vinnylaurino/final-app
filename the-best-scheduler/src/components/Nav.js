import React, { Component } from 'react';



class Nav extends Component {
  render() {
    return (
    <div className="headerWrapper">
      <div className="navBar">
        <ul>
          <li>My Account</li>
          <li>Calendars</li>
          <li>Events Near Me</li>
          <li>Log Out</li>
        </ul>
      </div>
      <div>
        <img src="" alt="Logo"/>
      </div>
      <div>
        <img src="" alt="User Icon"/>
      </div>
    </div>
    );
  }
}

export default Nav;
