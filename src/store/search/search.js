import {ActionType} from '../action';

const initialState = {
    query: ``,
    results: []
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_QUERY:
      {console.log(`d`);
          return {
        ...state,
        query: action.payload
      }};
    case ActionType.CHANGE_RESULTS:
    return {
        ...state,
        results: action.payload
    };
    default:
      return state;
  }
};

export {search};
