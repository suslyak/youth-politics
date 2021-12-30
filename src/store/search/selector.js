import {NameSpace} from '../root-reducer';

export const getResults = (state) => state[NameSpace.SEARCH].results;
export const getQuery = (state) => state[NameSpace.SEARCH].query;
