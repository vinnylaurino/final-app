import React, { Component } from 'react';
import sampleUser from '../sample-user';
import sampleCalendar from '../sample-calendar';
class PrevDay extends Component {
  constructor(){
    super()
    this.state = {
      dayData: sampleCalendar[2]
    }
  }

  formatDate() {
     let thisdate = new Date();
     return thisdate.toLocaleDateString ('en-US',
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
      <div className="dayContainer">
        <div className="row">
          <div className="greeting">
            <p>Hello, {sampleUser.first_name}</p>

          </div>
          <div className="date">
            <h2>{this.formatDate()-1}</h2>
          </div>
        </div>

          <div className="event-container">
            <h3>{this.getDayOfTheWeek()}</h3>
            <ul className="events">
              {this.dayEvents()}
            </ul>
          </div>
      </div>
    );
  }
}

export default PrevDay;
