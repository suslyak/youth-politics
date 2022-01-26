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
import BookApp from './components/App/BookApp';
import Search from './components/Search/Search';
import SwitchMyRoutes from './components/SwitchMyRoutes/SwitchMyRoutes';
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

/*const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
  (error) => {
    showSelfFadingRedToast(error);
  });
*/

const store = createStore(
  rootReducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  )
);

//const {store, persistor} = getStoreAndPersistor();

const body = document.querySelector('body');
const headerElement = body.querySelector('.page-header');
const headerMenuElement = headerElement.querySelector('.page-header__menu');
const navLinksElements = headerMenuElement.querySelectorAll('a[href]');
const burgerElement = headerElement.querySelector('.menu-toggle');
const closeMobileMenuElement = headerElement.querySelector('.page-header__menu-colse-button');
const pageHeaderBlackoutElement = body.querySelector('.page-header__blackout');
const localeSwitchLinks = document.querySelectorAll('.page-header__locale-switch-link');

if (headerMenuElement) {
  headerMenuElement.classList.remove('page-header__menu--no-js');
}

if (pageHeaderBlackoutElement) {
  pageHeaderBlackoutElement.classList.remove('page-header__blackout--no-js');
}

const showMobileMenu = function () {
  let viewportHeight = 0;

  if (typeof window.innerWidth !== 'undefined') {
    viewportHeight = window.innerHeight;
  } else {
    if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0) {
      viewportHeight = document.documentElement.clientHeight;
    } else {
      viewportHeight = document.getElementsByTagName('body')[0].clientHeight;
    }
  }

  if (headerMenuElement) {
    headerMenuElement.classList.add('page-header__menu--mobile-menu-opened');
    headerMenuElement.style.top = window.pageYOffset + 'px';

    if (pageHeaderBlackoutElement) {
      pageHeaderBlackoutElement.classList.add('page-header__blackout--mobile-menu-opened');
      pageHeaderBlackoutElement.addEventListener('click', hideMobileMenu);
      pageHeaderBlackoutElement.style.top = window.pageYOffset + 'px';

    }

    body.classList.add('modal-open');
  }

  navLinksElements.forEach(function (link) {
    link.addEventListener('click', hideMobileMenu);
  });
};

const onEscPress = (evt, callback) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && body.classList.contains('modal-open')) {
    evt.preventDefault();
    callback();
  }
};

const hideMobileMenu = function () {
  if (headerMenuElement) {
    headerMenuElement.classList.remove('page-header__menu--mobile-menu-opened');

    if (pageHeaderBlackoutElement) {
      pageHeaderBlackoutElement.classList.remove('page-header__blackout--mobile-menu-opened');      
    }

    body.classList.remove('modal-open');
  }

  navLinksElements.forEach(function (link) {
    link.removeEventListener('click', hideMobileMenu);
  });
};

if (burgerElement) {
  burgerElement.addEventListener('click', showMobileMenu);
}

if (closeMobileMenuElement) {
  closeMobileMenuElement.addEventListener('click', hideMobileMenu);
}

const switchLocale = function (evt) {
  evt.preventDefault();
  const href = evt.currentTarget.getAttribute('href');
  const path = window.location.pathname !== '/' && window.location.pathname !== '/ru' && window.location.pathname !== '/en'
    ? window.location.pathname.slice(window.location.pathname.indexOf(`/`, 2))
    : '';

  window.location.href = `${href}${path}${window.location.search}`;
}

localeSwitchLinks.forEach(function (link) {
  link.addEventListener('click', switchLocale);
});

document.addEventListener('keydown', (evt) => {
  onEscPress(evt, hideMobileMenu);
});

ReactDOM.render(
    <Provider store={store}>
      {/*<PersistGate loading={null} persistor={persistor}>*/}
      <BrowserRouter history={browserHistory}>
        <Switch>
          {/*<Route exact path={'/'}>
            <App />
          </Route>
          <Route path={'/search.html'}>
            <SearchApp />
          </Route>
          <Route path={'/reader.html'}>
            <BookApp />
          </Route>
          <Route>
            {() => (<>No app for this route.</>)}
        </Route>*/}
          <Route exact path="/" render={(match, location)=> <SwitchMyRoutes locale={"ru"} match={match}/>} />
          <Route path="/ru" render={(match, location)=> <SwitchMyRoutes locale={"ru"} match={match}/>} />
          <Route path="/en" render={(match, location)=> <SwitchMyRoutes locale={"en"} match={match}/>} />
          {/*<Route render={({location}) => <Redirect to={`/ru${location.pathname}${location.search}`}/>}/>*/}
          {/*<Route>
            {() => (<>No app for this route!</>)}
          </Route>*/}
        </Switch>
      </BrowserRouter>
      {/*</PersistGate>*/}
    </Provider>,
    document.querySelector(`#root`)
);