import React, {useState, useEffect } from 'react';
import {useLocation, Redirect, Route, Switch} from "react-router-dom";
import {useDispatch} from 'react-redux';
import SearchLine from '../SearchLine/SearchLine';
import Search from '../SearchLine/SearchLine';
import {
  fetchCategoriesList,
  fetchCountriesList,
  fetchOrganiztionsList,
  fetchSubjectsList,
  fetchSubSubjectsList,
  fetchLangsList,
  fetchTypesList} from '../../store/api-actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesList());
    dispatch(fetchOrganiztionsList());
    dispatch(fetchSubjectsList());
    dispatch(fetchSubSubjectsList());
    dispatch(fetchLangsList());
    dispatch(fetchTypesList());
    dispatch(fetchCategoriesList());
  }, []);

  return (
    <Switch>
      <Route exact path={'/'}>
        <SearchLine />
      </Route>
    </Switch>
  )
};

export default App;
