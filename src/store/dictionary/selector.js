import {NameSpace} from '../root-reducer';

export const getCountries = (state) => state[NameSpace.DICT].countries;
export const getOrganizations = (state) => state[NameSpace.DICT].organizations;
export const getSubjects = (state) => state[NameSpace.DICT].subjects;
export const getSubSubjects = (state) => state[NameSpace.DICT].subSubjects;
export const getLangs = (state) => state[NameSpace.DICT].langs;
export const getTypes = (state) => state[NameSpace.DICT].types;
