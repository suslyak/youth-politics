import React, {useState} from 'react';
import {useLocation, Redirect, Route, Switch} from "react-router-dom";
import SearchLine from '../SearchLine/SearchLine';
import Search from '../SearchLine/SearchLine';


const App = () => {
  return (
    <Switch>
      <Route exact path={'/index.html'}>
        <SearchLine />
      </Route>
    </Switch>
  )
};

export default App;
