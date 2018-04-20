import React from 'react';
import $ from 'jquery';
import Event from './Event'

class Eventful extends React.Component{
  constructor(){
    super()
    this.state = {
      query:"",
      events: []
    }

    this.setQuery = this.setQuery.bind(this)
    this.search = this.search.bind(this)
  }

  formatDate() {
     let thisdate = new Date();
     return
      thisdate.toLocaleDateString('en-US',
     {
       month: 'short',
       day: 'numeric'
     });

   };

   formatDateQuery() {
     const date = new Date().toLocaleString("en-US", { day: "2-digit", month: "2-digit", year: "numeric" });
     const dateParts = date.split(",")[0].split("/");
     const formattedDate = [dateParts[2], dateParts[0], dateParts[1]].join("-");

     return formattedDate;
   }


  setQuery(event){
    this.setState({
      query: event.target.value
    })
  }

  search(event) {
    event.preventDefault()
    const filterEventData = (eventArray) => {
      let storage = eventArray.map( item => {
        const description = item.description;
        let truncatedDescription;

        if (typeof description === "string") {
          truncatedDescription = description.substr(0, 100);
          if (truncatedDescription.length != description.length) {
            truncatedDescription += "..."
          }
        }

        return(
          {
            start_time: item.start_time,
            title: item.title,
            description: truncatedDescription
          }
        )

        // if item.description

      })
      return storage
    }

    let url = `https://api.eventful.com/json/events/search?app_key=BCZLrFTGWmvwN54g&keywords=${this.state.query}&location=Miami&date=${this.formatDateQuery()}`



    $.get( url, (response) => {
      console.log(url)
      this.setState({
        events: filterEventData(JSON.parse(response).events.event)
      })
    })
    .fail( response => console.dir(response.errors))
    .always( () => console.dir("Done"))
  }

  render(){
    return(
      <div className="event-form">
        <h1>Events in the area</h1>
      <form onSubmit={this.search}>
          <input className="search" type="text" placeholder="Search event..." value={this.state.query}
          onChange={this.setQuery} />
        <input className="submit" type="submit" />
        </form>
        <div className="eventful">
          {this.state.events.map( (event, index) => {
            return(
              <Event
                key={index}
                description={event.description}
                start_time={event.start_time}
                title={event.title}
                />
            )
          })}
          </div>
        </div>
    )
  }
}


  // componentWillMount() {
  //
  //
  //   let url = "http://api.eventful.com/json/events/search?app_key=BCZLrFTGWmvwN54g&keywords=&location=Miami&date=Today"
  //
  //   $("#result").append("<h1> Hello </h1>")
  //   $.ajax({
  //     url: "http://api.eventful.com/json/events/search?app_key=BCZLrFTGWmvwN54g&keywords=&location=Miami&date=Today",
  //     method: 'GET',
  //     dataType: 'json',
  //     headers: { "Access-Control-Allow-Origin": "*"}
  //   }).done( data => {
  //     console.log(data["events"]["event"][0])
  //   }).always( ()=>{
  //     console.log("Hey")
  //   })
  // }
  // render(){
  //   return(
  //     <h1> Hola </h1>
  //   )
  // }


export default Eventful;
