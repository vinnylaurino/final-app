import React, { Component } from 'react';
import sampleUser from '../sample-user';
import sampleCalendar from '../sample-calendar';
class Day extends Component {


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
     console.log(todaysDay);
     console.log(sampleCalendar[1].day);

     if (todaysDay == sampleCalendar[1].day) {
       let theResult = `<li>${sampleCalendar[1].morning_event[2]}</li><li>${sampleCalendar[1].afternoon_event[2]}</li><li>${sampleCalendar[1].evening_event[2]}</li>`
       return theResult;
     }
   }


  render() {

    const day = this.props.day;


    return (
      <div className="dayContainer">
        <p>Hello, {sampleUser.first_name}</p>
          <h2>{this.formatDate()}</h2>
          <div>
            <ul> {this.getDayOfTheWeek()}</ul>
          </div>
      </div>
    );
  }
}

export default Day;
