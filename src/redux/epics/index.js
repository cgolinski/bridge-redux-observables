import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';

import { getRecipeByNameEpic, getRecipeByCaloriesEpic, getRecipesByIngredientEpic } from './recipe.epics';

export default (...args) => combineEpics(
  getRecipeByNameEpic,
  getRecipeByCaloriesEpic, 
  getRecipesByIngredientEpic
)(...args, {ajax: Observable.ajax});
