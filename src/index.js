import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/App/App';
import browserHistory from "./browser-history";

import './sass/style.scss';


ReactDOM.render(
      <BrowserRouter history={browserHistory}>
        <App
        />
      </BrowserRouter>,
    document.querySelector(`#search`)
);
