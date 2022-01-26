import React, {useState , useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useLocation} from "react-router-dom";
import SearchLine from '../SearchLine/SearchLine';
import Results from '../Results/Results';
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

  const uriSplittebByFilter = decodeURI(location.search.replace('[','')).split('name,title,title_ru,authors,year');
  const isFromSimpleSearch = uriSplittebByFilter.length > 1;
  const defaultSearchValue = isFromSimpleSearch ? uriSplittebByFilter[1].split(`"$match":"`)[1].replace('"}}]','') : ``;

  console.log(defaultSearchValue);
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
      <SearchLine advancedSearch={false} defaultValue={defaultSearchValue}/>
      <div className="search">
        <Results/>
      </div>
    </>)
};

export default Search;
