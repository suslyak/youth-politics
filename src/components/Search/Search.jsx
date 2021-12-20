import React, {useState} from 'react';
import SearchLine from '../SearchLine/SearchLine';
import ResultsList from '../ResultsList/ResultsList';
import {SEARCH_RESULTS} from './mocks/SearchMocks';

const Search = () => {
  
  return (
    <>
        <SearchLine />
        <ResultsList searchResult={SEARCH_RESULTS}/>
    </>)
};

export default Search;
