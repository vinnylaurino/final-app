import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrap">
        <div className="quick-links">
          <p><Link to="/">Home</Link> | <Link to="/">Contact</Link></p>
        </div>
        <div className="copyright">
          <p>&copy; 2018 Bria, Victor &amp; Vinny</p>
        </div>

      </div>
    );
  }
}

export default Footer;
