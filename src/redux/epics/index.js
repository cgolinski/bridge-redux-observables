import { combineEpics } from 'redux-observable';

import { getRecipeByNameEpic, getRecipeByCaloriesEpic, getRecipesByIngredientEpic } from './recipe.epics';

export default combineEpics(
  getRecipeByNameEpic,
  getRecipeByCaloriesEpic, 
  getRecipesByIngredientEpic
);
