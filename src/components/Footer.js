import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrap">
        <div className="quick-links">
          <p><a href="#home"> Home </a> | <a href="#contact"> Contact Us </a></p>
        </div>
        <div className="copyright">
          <p>&copy; 2018 Bria, Victor &amp; Vinny</p>
        </div>

      </div>
    );
  }
}

export default Footer;
