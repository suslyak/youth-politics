import {ActionType} from '../action';

const initialState = {
    countries: [],
    subjects: [],
    subSubjects: [],
    organizations: [],
    langs: [],
    types: []
};

const dictionary = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PUT_COUNTRIES:
        {
          return {
            ...state,
            countries: action.payload
        }};
    case ActionType.PUT_SUBJECTS:
        {
            return {
            ...state,
            subjects: action.payload
        }};
    case ActionType.PUT_SUBSUBJECTS:
        {
            return {
            ...state,
            subSubjects: action.payload
        }};
    case ActionType.PUT_ORGANIZATIONS:
        {
            return {
            ...state,
            organizations: action.payload
        }};
    case ActionType.PUT_LANGS:
        {
            return {
            ...state,
            langs: action.payload
        }};
    case ActionType.PUT_TYPES:
        {
            return {
            ...state,
            types: action.payload
        }};
    default:
      return state;
  }
};

export {dictionary};
