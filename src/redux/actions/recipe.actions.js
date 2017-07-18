export const RECIPE_ACTIONS = {
  // user actions
  GET_RECIPES_BY_NAME: 'GET_RECIPES_BY_NAME',
  UPDATE_SEARCH_FIELD_VALUE: 'UPDATE_SEARCH_FIELD_VALUE',
  SET_SELECTED_RECIPE_ID: 'SET_SELECTED_RECIPE_ID',
  SET_SEARCH_TYPE: 'SET_SEARCH_TYPE',
  GET_RECIPES_BY_CALORIES: 'GET_RECIPES_BY_CALORIES',
  GET_ALL_RECIPES: 'GET_ALL_RECIPES',


  // epic actions
  RECIPES_RECEIVED_SUCCESS: 'RECIPES_RECEIVED_SUCCESS',
  RECIPES_RECEIVED_ERROR: 'RECIPES_RECEIVED_ERROR',
};

export const getRecipeByName = (recipeName) => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_NAME,
  payload: recipeName
});

export const updateSearchFieldValue = searchFieldValue => ({
  type: RECIPE_ACTIONS.UPDATE_SEARCH_FIELD_VALUE,
  payload: searchFieldValue
});

export const setSelectedRecipeId = selectedRecipeId => ({
  type: RECIPE_ACTIONS.SET_SELECTED_RECIPE_ID,
  payload: selectedRecipeId
});

export const setSearchType = value => ({
  type: RECIPE_ACTIONS.SET_SEARCH_TYPE,
  payload: value
});

export const getRecipeByCalories = maxCalories => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_CALORIES,
  payload: maxCalories
});

export const getAllRecipes = () => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_CALORIES,
  payload: null
});