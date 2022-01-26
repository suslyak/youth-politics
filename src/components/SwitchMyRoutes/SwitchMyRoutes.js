import React, {useState, useEffect } from 'react';
import {useLocation, Redirect, Route, Switch} from "react-router-dom";
import {useDispatch} from 'react-redux';
import SearchLine from '../SearchLine/SearchLine';
import Search from '../Search/Search';
import {
  fetchCategoriesList,
  fetchCountriesList,
  fetchOrganiztionsList,
  fetchSubjectsList,
  fetchSubSubjectsList,
  fetchLangsList,
  fetchTypesList} from '../../store/api-actions';
import { putLocale } from '../../store/action';

const SwitchMyRoutes = ({locale='ru', match}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(putLocale(locale));
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
        <Route exact path={`/`}>
            <SearchLine />
        </Route>
        <Route exact path={`/${locale}`}>
            <SearchLine />
        </Route>
        <Route exact path={`/${locale}/about.html`}>
            <SearchLine />
        </Route>
        <Route exact path={`/${locale}/help.html`}>
            <SearchLine />
        </Route>
        <Route path={`/${locale}/search`}>
            <Search />
        </Route>
        <Route>
            {() => (<>No app for this route.</>)}
        </Route>
    </Switch>
  )
};

export default SwitchMyRoutes;
