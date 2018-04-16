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



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
