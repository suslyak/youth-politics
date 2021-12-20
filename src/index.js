import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter, useLocation, Redirect, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/App/App';
import SearchApp from './components/App/SearchApp';
import Search from './components/Search/Search';
import browserHistory from "./browser-history";

import './sass/style.scss';


ReactDOM.render(
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path={'/index.html'}>
            <App />
          </Route>
          <Route exact path={'/search.html'}>
            <SearchApp />
          </Route>
        </Switch>
      </BrowserRouter>,
    document.querySelector(`#root`)
);