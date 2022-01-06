import React, {useState , useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useLocation} from "react-router-dom";
import SearchLine from '../SearchLine/SearchLine';
import ResultsList from '../ResultsList/ResultsList';
import {SEARCH_RESULTS} from './mocks/SearchMocks';
import {changeIsResultsLoaded} from '../../store/action';
import {
  fetchCategoriesList,
  fetchCountriesList,
  fetchOrganiztionsList,
  fetchSubjectsList,
  fetchSubSubjectsList,
  fetchLangsList,
  fetchTypesList,
  fetchAuthorTitleResultsList} from '../../store/api-actions';

const Search = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCountriesList());
      dispatch(fetchOrganiztionsList());
      dispatch(fetchSubjectsList());
      dispatch(fetchSubSubjectsList());
      dispatch(fetchLangsList());
      dispatch(fetchTypesList());
      dispatch(fetchCategoriesList());
      dispatch(changeIsResultsLoaded(false));

      if (location.search.length) {
        dispatch(fetchAuthorTitleResultsList(location.search));
      }
  }, []);

  return (
    <>
      <SearchLine />
      <div className="search">
        <ResultsList/>
      </div>
    </>)
};

export default Search;
