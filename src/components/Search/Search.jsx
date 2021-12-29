import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import SearchLine from '../SearchLine/SearchLine';
import ResultsList from '../ResultsList/ResultsList';
import {SEARCH_RESULTS} from './mocks/SearchMocks';

const Search = () => {
  const location = useLocation();
  console.log(location.search.split('&'));
  return (
    <>
      <SearchLine />
      <div className="search">
        <ResultsList searchResult={SEARCH_RESULTS}/>
      </div>
    </>)
};

export default Search;
