export const SEARCH_ACTIONS = {
  // user actions
  UPDATE_SEARCH_FIELD_VALUE: 'UPDATE_SEARCH_FIELD_VALUE',

  // epic actions

};

export const updateSearchFieldValue = searchFieldValue => ({
  type: SEARCH_ACTIONS.UPDATE_SEARCH_FIELD_VALUE,
  payload: searchFieldValue
});

