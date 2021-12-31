import {ActionType} from '../action';

const initialState = {
    categories: [],
    countries: [],
    subjects: [],
    subSubjects: [],
    organizations: [],
    langs: [],
    types: [],
    isCategoriesLoaded: false,
    isCountriesLoaded: false,
    isSubjectsLoaded: false,
    isSubSubjectsLoaded: false,
    isOrganizationsLoaded: false,
    isLangsLoaded: false,
    isTypesLoaded: false,
};

const dictionary = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PUT_CATEGORIES:
        {
          return {
            ...state,
            categories: action.payload,
            isCategoriesLoaded: true
        }};
    case ActionType.PUT_COUNTRIES:
        {
          return {
            ...state,
            countries: action.payload,
            isCountriesLoaded: true
        }};
    case ActionType.PUT_SUBJECTS:
        {
            return {
            ...state,
            subjects: action.payload,
            isSubjectsLoaded: true
        }};
    case ActionType.PUT_SUBSUBJECTS:
        {
            return {
            ...state,
            subSubjects: action.payload,
            isSubSubjectsLoaded: true
        }};
    case ActionType.PUT_ORGANIZATIONS:
        {
            return {
            ...state,
            organizations: action.payload,
            isOrganizationsLoaded: true
        }};
    case ActionType.PUT_LANGS:
        {
            return {
            ...state,
            langs: action.payload,
            isLangsLoaded: true
        }};
    case ActionType.PUT_TYPES:
        {
            return {
            ...state,
            types: action.payload,
            isTypesLoaded: true
        }};
    default:
      return state;
  }
};

export {dictionary};
