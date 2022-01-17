import React, {useState} from 'react';
import {useLocation, Redirect, Route, Switch} from "react-router-dom";
import SearchLine from '../SearchLine/SearchLine';
import BookReader from '../BookReader/BookReader';


const BookApp = () => {
  return (
    <Switch>
        <Route path={'/reader.html'}>
            <BookReader/>
        </Route>
    </Switch>)
};

export default BookApp;
