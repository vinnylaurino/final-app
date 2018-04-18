import React, { Component } from 'react'

const Event = props => {
  return(
    <div>
      <header>
        <h3>{props.title}</h3>
        <strong>{props.start_time}</strong>
      </header>
      <div>
        <p dangerouslySetInnerHTML={{__html: props.description}} />
      </div>
    </div>
  )
}

export default Event;
