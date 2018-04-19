import React, { Component } from 'react'

class Event extends Component {
  constructor(){
    super()
    this.formatDateQuery = this.formatDateQuery.bind(this)
  }

  formatDateQuery(givenTime) {
    const date = new Date(givenTime).toLocaleString("en-US", { day: "2-digit", month: "2-digit", year: "numeric", hour: '2-digit', minute: '2-digit' });
    return date;
  }

  render(){
    return(
      <div>
        <header>
          <h3>{this.props.title}</h3>
          <strong>{this.formatDateQuery(this.props.start_time)}</strong>
        </header>
        <div>
          <p dangerouslySetInnerHTML={{__html: this.props.description}} />
        </div>
      </div>
    )
  }

}

export default Event;
