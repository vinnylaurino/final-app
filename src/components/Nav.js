import React, { Component } from 'react';



class Nav extends Component {
  render() {
    return (

      <div>

        <a href="#main-menu" class="menu-toggle" role="button" id="main-menu-toggle"><span class="icons fa fa-bars"></span></a>
        <nav id="main-menu" class="main-menu" role="navigation">
        <a href="#main-menu-toggle" class="menu-close" role="button" id="main-menu-close"><span class="fa fa-close"></span></a>
          <ul>
            <li><a href="">My Account</a></li>
            <li><a href="">Calendars</a></li>
            <li><a href="">Events Near Me</a></li>
            <li><a href="">Log Out</a></li>
          </ul>
        </nav>
        <a href="#main-menu-toggle" class="backdrop" tabindex="-1"></a>
        <img src="" class="logo" alt="logo"/>
      </div>

    );
  }
}

export default Nav;
