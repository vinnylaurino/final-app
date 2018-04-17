import React, { Component } from 'react';
import Nav from "./components/Nav";
import Week from "./components/Week";
import Footer from "./components/Footer";

import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <main className="mainWrapper">
          <Week />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
