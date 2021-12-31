export const ActionType = {
    CHANGE_QUERY: `search/changeQuery`,
    CHANGE_RESULTS: `search/changeResults`,
    PUT_CATEGORIES: `dict/putCategories`,
    PUT_COUNTRIES: `dict/putCountries`,
    PUT_SUBJECTS: `dict/putSubject`,
    PUT_SUBSUBJECTS: `dict/putSubSubject`,
    PUT_ORGANIZATIONS: `dict/putOrganizations`,
    PUT_LANGS: `dict/putLangs`,
    PUT_TYPES: `dict/putTypes`
};
  
export const changeQuery = (query) => {
    return {
        type: ActionType.CHANGE_QUERY,
        payload: query,
    };
};

export const changeResults = (results) => {
    return {
        type: ActionType.CHANGE_RESULTS,
        payload: results,
    };
};

export const putCategories = (data) => {
    return {
        type: ActionType.PUT_CATEGORIES,
        payload: data,
    };
};

export const putCountries = (data) => {
    return {
        type: ActionType.PUT_COUNTRIES,
        payload: data,
    };
};

export const putOrganizations = (data) => {
    return {
        type: ActionType.PUT_ORGANIZATIONS,
        payload: data,
    };
};

export const putSubjects = (data) => {
    return {
        type: ActionType.PUT_SUBJECTS,
        payload: data,
    };
};

export const putSubSubjects = (data) => {
    return {
        type: ActionType.PUT_SUBSUBJECTS,
        payload: data,
    };
};

export const putLangs = (data) => {
    return {
        type: ActionType.PUT_LANGS,
        payload: data,
    };
};

export const putTypes = (data) => {
    return {
        type: ActionType.PUT_TYPES,
        payload: data,
    };
};
