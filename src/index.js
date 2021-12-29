import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter, useLocation, Redirect, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/App/App';
import SearchApp from './components/App/SearchApp';
import Search from './components/Search/Search';
import browserHistory from "./browser-history";
import {createAPI} from "./services/api";
import rootReducer from "./store/root-reducer"
import {changeQuery } from './store/action';

import './sass/style.scss';

const api = createAPI(
  () => {},
  (error) => {
    console.log(error)
  });

const store = createStore(rootReducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  ));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path={'/'}>
            <App />
          </Route>
          <Route path={'/search.html'}>
            <SearchApp />
          </Route>
          <Route>
            {() => (<>Аумя нету!</>)}
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);