import {ActionType} from '../action';

const initialState = {
    query: ``,
    results: [],
    isResultsLoaded: false,
 };

const search = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_QUERY:
      {
        return {
        ...state,
        query: action.payload
      }};
    case ActionType.CHANGE_RESULTS:
    return {
        ...state,
        results: action.payload,
        isResultsLoaded: true
    };
    case ActionType.CHANGE_IS_RESULTS_LOADED:
    return {
        ...state,
        isResultsLoaded: action.payload
    };
    default:
      return state;
  }
};

export {search};
