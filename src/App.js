import React, { Component } from 'react';
import Nav from "./components/Nav";
import './App.css';
import Eventful from "./components/Eventful"



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <main className="">

        </main>
        <footer>
          <Eventful/>
        </footer>
      </div>
    );
  }
}

export default App;
