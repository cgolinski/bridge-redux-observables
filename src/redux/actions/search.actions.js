export const SEARCH_ACTIONS = {
  // user actions
  UPDATE_SEARCH_FIELD_VALUE: 'UPDATE_SEARCH_FIELD_VALUE',
  SET_SELECTED_RECIPE: 'SET_SELECTED_RECIPE',

  // epic actions

};

export const updateSearchFieldValue = searchFieldValue => ({
  type: SEARCH_ACTIONS.UPDATE_SEARCH_FIELD_VALUE,
  payload: searchFieldValue
});

export const setSelectedRecipe = selectedRecipe => ({
  type: SEARCH_ACTIONS.SET_SELECTED_RECIPE,
  payload: selectedRecipe
});
