import React from 'react';
import ReactDOM from 'react-dom';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { shallow } from 'enzyme';
import { getRecipeByNameEpic, getRecipeByCaloriesEpic, getRecipesByIngredientEpic } from './recipe.epics';
import { RECIPE_ACTIONS } from '../actions/recipe.actions';

describe('getRecipeByName Epic', () => {

  let action$ = ActionsObservable.of(
    {type: RECIPE_ACTIONS.GET_RECIPES_BY_NAME, payload: 'chocolate'}
  );

  it('dispatches the correct action when it is successful', (done) => {
    const ajax = () => Observable.of({response: {
      hits: [{recipe: 'chocolate cake'}],
    }});

    getRecipeByNameEpic(action$, null, {ajax})
      .subscribe(result => {
        expect(result.type).toBe(RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS);
        expect(result.payload).toEqual(['chocolate cake']);
        done();
      });
  });
});

describe('getRecipeByCalories Epic', () => {
  let action$ = ActionsObservable.of(
    {type: RECIPE_ACTIONS.GET_RECIPES_BY_CALORIES, payload: '500'}
  ); 

  it('dispatches the correct action when it is successful', (done) => {
    const ajax = () => Observable.of({response: {
      hits: [{recipe: 'chocolate cake'}],
    }});

    getRecipeByCaloriesEpic(action$, null, {ajax})
      .subscribe(result => {
        expect(result.type).toBe(RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS);
        expect(result.payload).toEqual(['chocolate cake']);
        done();
      });
  });
});

describe('getRecipesByIngredient Epic', () => {
  let action$ = ActionsObservable.of(
    {type: RECIPE_ACTIONS.GET_RECIPES_BY_INGREDIENT, payload: 'flour'}
  ); 

  it('dispatches the correct action when it is successful', (done) => {
    const ajax = () => Observable.of({response: {
      hits: [{recipe: {ingredientLines: ['flour']}}],
    }});

    getRecipesByIngredientEpic(action$, null, {ajax})
      .subscribe(result => {
        expect(result.type).toBe(RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS);
        expect(result.payload).toEqual([{ingredientLines: ['flour']}]);
        done();
      });
  });
});
