import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter, useLocation, Redirect, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/App/App';
import SearchApp from './components/App/SearchApp';
import Search from './components/Search/Search';
import browserHistory from "./browser-history";
import {createAPI} from "./services/api";
import rootReducer from "./store/root-reducer"
import {changeQuery } from './store/action';
import getStoreAndPersistor from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react'

import './sass/style.scss';

const api = createAPI(
  () => {},
  (error) => {
    console.log(error)
  });

const persistConfig = {
  key: 'root',
  storage,
}

const {store, persistor} = getStoreAndPersistor();

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path={'/'}>
            <App />
          </Route>
          <Route path={'/search.html'}>
            <SearchApp />
          </Route>
          <Route>
            {() => (<>No app for this route.</>)}
          </Route>
        </Switch>
      </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.querySelector(`#root`)
);