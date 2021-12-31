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
    default:
      return state;
  }
};

export {search};
