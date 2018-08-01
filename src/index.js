import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Aircraft from './Aircraft';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Router, Route} from 'react-router';
// import routes from './Router'; 
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
    <div>
        <Route path ='/' component={App}/>
        <Route path ='/aircraft' component={Aircraft}/>
        </div>
        </BrowserRouter>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
