import { combineEpics } from 'redux-observable';

import { getRecipeByNameEpic, getRecipeByCaloriesEpic, getAllRecipesEpic } from './recipe.epics';

export default combineEpics(
  getRecipeByNameEpic,
  getRecipeByCaloriesEpic, 
  getAllRecipesEpic
);
