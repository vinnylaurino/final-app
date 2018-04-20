import React, { Component } from 'react';
import Nav from "./components/Nav";
import Week from "./components/Week";
import Footer from "./components/Footer";
import sample_user from "./sample-user"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favorites from "./components/Favorites.js"
import './App.css';
import Eventful from "./components/Eventful"




class App extends Component {

  constructor(){
    super()
    this.state={
      user: sample_user,
      favorites: sample_user.favorites
    }
    this.favoriteChange = this.favoriteChange.bind(this)
  }

  favoriteChange(selection){
    let currentFaves = this.state.favorites
    if ( currentFaves.includes(selection) ){
      this.setState({
        favorites: currentFaves.splice( currentFaves.indexOf(selection) )
      })
    } else {
      this.setState({
        favorites: currentFaves.push(selection)
      })
    }
  }

  updateFavorites(items){
    this.setState({
      favorites: items
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <Nav />
            </header>
            <main className="mainWrapper">
              <Route exact path="/" component={Week} />
              <Route path="/Favorites" render={ ()=>{
                  return <Favorites
                          list={this.state.favorites}
                          updateFavorites={this.updateFavorites}
                          favoriteChange={this.favoriteChange}/>
                }
              } />
            </main>
            <footer>
              <Eventful/>
              <Footer />
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
