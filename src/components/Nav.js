import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <a href="#main-menu" class="menu-toggle" role="button" id="main-menu-toggle"><span class="icons fa fa-bars"></span></a>
        <nav id="main-menu" class="main-menu" role="navigation">
        <a href="#main-menu-toggle" class="menu-close" role="button" id="main-menu-close"><span class="fa fa-close"></span></a>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="">My Account</Link></li>
            <li><Link to="">Calendars</Link></li>
            <li><Link to="">Events Near Me</Link></li>
            {/* <li><Link to="/Favorites">Favorites</Link></li> */}
            <li><Link to="/Login">Log Out</Link></li>
          </ul>
        </nav>
        <a href="#main-menu-toggle" class="backdrop" tabindex="-1"></a>
        <img src="https://s9.postimg.cc/btwaonu0v/remidify-logo-light.png" class="logo" alt="logo"/>

      </div>
    );
  }
}

export default Nav;
