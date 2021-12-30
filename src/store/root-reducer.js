import {combineReducers} from 'redux';
import {search} from './search/search';
import {dictionary} from './dictionary/dictionary';


export const NameSpace = {
  SEARCH: `SEARCH`,
  DICT: `DICT`
};

export default combineReducers({
  [NameSpace.SEARCH]: search,
  [NameSpace.DICT]: dictionary,
});
