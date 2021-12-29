import {combineReducers} from 'redux';
import {search} from './search/search';


export const NameSpace = {
  SEARCH: `SEARCH`,
};

export default combineReducers({
  [NameSpace.SEARCH]: search,
});
