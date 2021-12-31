import React, {useState} from 'react';
import {useLocation, Redirect, Route, Switch} from "react-router-dom";
import SearchLine from '../SearchLine/SearchLine';
import Search from '../Search/Search';


const SearchApp = () => {
  return (
    <Switch>
        <Route path={'/search.html'}>
            <Search />
        </Route>
    </Switch>)
};

export default SearchApp;
