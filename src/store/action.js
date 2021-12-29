export const ActionType = {
    CHANGE_QUERY: `search/changeQuery`,
    CHANGE_RESULTS: `search/chanfeResults`,
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