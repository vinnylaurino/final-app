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
   }
  getDayOfWeek() {
  let thisdate = new Date();

  for (day in sampleCalendar) {
      if day === thisdate.getDay(){

        return thisdate.toLocaleDateString('en-US',{weekday: 'long';});
      }
  };

  render() {
    const day = this.props.day;


    return (
      <div className="dayContainer">
        <p>Hello, {sampleUser.first_name}</p>
          <h2>{this.formatDate()}</h2>
          <div>
<h3> {this.getDayOfWeek()}</h3>
          </div>
      </div>
    );
  }
}

export default Day;
