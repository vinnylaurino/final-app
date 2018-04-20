import React, { Component } from 'react';
import $ from "jquery";

class Favorites extends Component {
  constructor(){
    super()
    this.handleCheck = this.handleCheck.bind(this)
  }

  populateCheckboxes(){
    let url="http://api.eventful.com/json/categories/list?app_key=BCZLrFTGWmvwN54g"
    $.get( url, (response) => {
        return this.buildCheckbox( JSON.parse(response).category )
      })
  }

  handleCheck(event){
    console.log(event.target.name);
    this.props.favoriteChange(event.target.name)
  }

  buildCheckbox(list){

    let inputList = []
    list.forEach( (item) => {
      inputList(
        <div>
          <input  type="checkbox"
                  name={item.id}
                  value={item.id}
                  checked="true"
                  onChange={this.handleCheck} />
          <label htmlFor={item.id} >{item.name}</label>
        </div>
      )
    })
    console.log(inputList);
  }

  handleSubmit(event){
    event.preventDefault()
    // let selection = []
    // $("input").each((item)=>{
    //   selection.push($(item).val())
    // })
    // this.props.updateFavorites(selection)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <fieldset>
          <legend>Choose your interests</legend>
          {
            this.populateCheckboxes()
          }
          {/*}<div>
            <input type="checkbox" id="Beauty&Spa" name="interest" value="Beauty&Spa"/>
            <label for="Beauty&Spa">Beauty&Spa</label>
          </div>*/}
        </fieldset>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Favorites;
