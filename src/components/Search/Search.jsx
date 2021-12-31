import React, {useState , useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useLocation} from "react-router-dom";
import SearchLine from '../SearchLine/SearchLine';
import ResultsList from '../ResultsList/ResultsList';
import {SEARCH_RESULTS} from './mocks/SearchMocks';
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

  const {results, isResultsLoaded} = useSelector((state) => state.SEARCH);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCountriesList());
      dispatch(fetchOrganiztionsList());
      dispatch(fetchSubjectsList());
      dispatch(fetchSubSubjectsList());
      dispatch(fetchLangsList());
      dispatch(fetchTypesList());
      dispatch(fetchCategoriesList());

      if (location.search.length
        && !isResultsLoaded
        
        ) {
        dispatch(fetchAuthorTitleResultsList(location.search));
      }
  }, [
    isResultsLoaded,
  ]);

  return (
    <>
      <SearchLine />
      {(results.length > 0) && <div className="search">
        <ResultsList res={results}/>
      </div>}
    </>)
};

export default Search;
