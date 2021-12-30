import React, {useState , useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useLocation} from "react-router-dom";
import SearchLine from '../SearchLine/SearchLine';
import ResultsList from '../ResultsList/ResultsList';
import {SEARCH_RESULTS} from './mocks/SearchMocks';
import {fetchCountriesList} from '../../store/api-actions';

const Search = () => {
  const location = useLocation();
  console.log(location.search.split('&'));
  const {countries} = useSelector((state) => state.DICT);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCountriesList());
  }, []);

  return (
    <>
      <SearchLine />
      <div className="search">
        <ResultsList searchResult={SEARCH_RESULTS}/>
      </div>
    </>)
};

export default Search;
