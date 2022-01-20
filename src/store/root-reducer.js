import {combineReducers} from 'redux';
import {search} from './search/search';
import {dictionary} from './dictionary/dictionary';
import {locale} from './locale/locale';


export const NameSpace = {
  SEARCH: `SEARCH`,
  DICT: `DICT`,
  LOCALE: `LOCALE`
};

export default combineReducers({
  [NameSpace.SEARCH]: search,
  [NameSpace.DICT]: dictionary,
  [NameSpace.LOCALE]: locale,
});
