import {
    putCategories,
    putCountries,
    putOrganizations,
    putSubjects,
    putSubSubjects,
    putLangs,
    putTypes,
    changeResults
} from "./action";

import {APIRoute} from "../const";
  
export const fetchCategoriesList = () => (dispatch, _getState, api) => (
    api.get(`${APIRoute.DICT}?entity=Category`)
        .then(({data}) => {
        dispatch(putCategories(data))})
);

export const fetchCountriesList = () => (dispatch, _getState, api) => (
    api.get(`${APIRoute.DICT}?entity=Country`)
        .then(({data}) => {
        dispatch(putCountries(data))})
);

export const fetchOrganiztionsList = () => (dispatch, _getState, api) => (
    api.get(`${APIRoute.DICT}?entity=Organization`)
        .then(({data}) => {
        dispatch(putOrganizations(data))})
);

export const fetchSubjectsList = () => (dispatch, _getState, api) => (
    api.get(`${APIRoute.DICT}?entity=Subject1`)
        .then(({data}) => {
        dispatch(putSubjects(data))})
);

export const fetchSubSubjectsList = () => (dispatch, _getState, api) => (
    api.get(`${APIRoute.DICT}?entity=Subject2`)
        .then(({data}) => {
        dispatch(putSubSubjects(data))})
);

export const fetchLangsList = () => (dispatch, _getState, api) => (
    api.get(`${APIRoute.DICT}?entity=Lang`)
        .then(({data}) => {
        dispatch(putLangs(data))})
);

export const fetchTypesList = () => (dispatch, _getState, api) => (
    api.get(`${APIRoute.DICT}?entity=Doctype`)
        .then(({data}) => {
        dispatch(putTypes(data))})
)

export const fetchAuthorTitleResultsList = (query) => (dispatch, _getState, api) => (
    api.get(`${APIRoute.SEARCH}${query}`)
        .then(({data}) => {
        dispatch(changeResults(data))})
)