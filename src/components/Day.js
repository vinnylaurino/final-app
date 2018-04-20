import React, { Component } from 'react';
import sampleUser from '../sample-user';
import sampleCalendar from '../sample-calendar';
import { Link } from "react-router-dom";

class Day extends Component {
  constructor(){
    super()
    this.state = {
      dayData: sampleCalendar[1]
    }
  }

  formatDate() {
     let thisdate = new Date();
     return thisdate.toLocaleDateString('en-US',
     {
       month: 'short',
       day: 'numeric'
     });
   };
   getDayOfTheWeek() {
     let todaysDay = new Date().toLocaleDateString('en-US', {weekday: 'long'});
     return this.state.dayData.name
        };
   dayEvents(){
     let result = [];
     for (let item in this.state.dayData.events){
       result.push(<li>{this.state.dayData.events[item]}</li>)
     }
     return result
    }

  render() {
    console.log(sampleCalendar[0].events);
    const day = this.props.day;


    return (
      <div className="week-container">
        <div>
          <Link to="/PrevDay"><div className="prev-day-link"></div></Link>
        </div>
        <div className="dayContainer">
          <div className="row">
            <div className="greeting">
              <p>Hello, {sampleUser.first_name}</p>
              <p>You have some free time, why don't you look something up?</p>
            </div>
            <div className="date">
              <h2>{this.formatDate()}</h2>
            </div>
          </div>

            <div className="event-container">
              <h3>{this.getDayOfTheWeek()}</h3>
              <ul className="events">
                {this.dayEvents()}
              </ul>
            </div>
        </div>
        <div>
          <Link to="/NextDay"><div className="next-day-link"></div></Link>
        </div>
      </div>
    );
  }
}

export default Day;
