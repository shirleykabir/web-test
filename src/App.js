import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Navigation.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import ReactGA from 'react-ga';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './components/About';
import { Aircraft } from './Aircraft';

const ReactRouter = () => (
  <Router>
    <div className="Routes">
      <Switch>
        <Route exact path="/" />
        <Route exact path="/portfolio" />
        <Route exact path="/contact" />
        <Route exact path="/blog" />
        <Route exact path="/videos" />
      </Switch>
    </div>
  </Router>
)
export default class App extends Component {
  render() {
    ReactGA.initialize('UA-102303776-1');
    // ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className="App">
        < ReactRouter />
        { About }
        { Navigation }
        <div className="footer">
          { Footer }
        </div>
    </div>
    );
  }
}

// export default App;
