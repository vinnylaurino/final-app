import React, { Component } from 'react';
import sampleUser from '../sample-user';
import sampleCalendar from '../sample-calendar';
import { Link } from "react-router-dom";

class NextDay extends Component {
  constructor(){
    super()
    this.state = {
      dayData: sampleCalendar[2]
    }
  }

  formatDate() {
     let thisdate = new Date();
     thisdate.setDate(thisdate.getDate() + 1);

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
          <Link to="/"><div className="prev-day-link"></div></Link>
        </div>
        <div className="dayContainer">
          <div className="row">
            <div className="greeting">
              <p>You have a full schedule.</p>
            </div>
            <div className="date">
              <h2>{this.formatDate()}</h2>
            </div>
          </div>

          <div className="event-container">
            <ul className="events">
              {this.dayEvents()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NextDay;
