import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Day from './components/Day';
import EventModifier from './components/EventModifier';
import Nav from './components/Nav';
import Week from './components/Week';
import Footer from './components/Footer';
import NextDay from './components/NextDay';
import PrevDay from './components/PrevDay';

var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");






ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
