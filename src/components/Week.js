import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Day from "./Day";
import NextDay from "./NextDay";
import PrevDay from "./PrevDay";



class Week extends Component {
  render() {
    return (
      <Router>
        <div className="week-container">
            <Link to="/PrevDay"><div className="prev-day-link"></div></Link>
            <Day />
            <Link to="/NextDay"><div className="next-day-link"></div></Link>
            <Route path="/PrevDay" component={PrevDay} />
            <Route path="/NextDay" component={NextDay} />
        </div>
      </Router>

    );
  }
}


export default Week;
