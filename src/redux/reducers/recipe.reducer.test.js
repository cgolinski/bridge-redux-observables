import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { RECIPE_ACTIONS } from '../actions/recipe.actions';
import recipeReducer, { DEFAULT_STATE } from  './recipe.reducer';

describe('recipeReducer test', () => {
  let recipeReducerState = recipeReducer(undefined, {type: 'foo', payload: ''});

  beforeEach(() => {
    recipeReducerState = recipeReducer(undefined, {type: 'foo', payload: ''});
  });

  it('should return the initial state', () => {
    expect(recipeReducerState).toEqual(DEFAULT_STATE);
  });

  it('should handle RECIPES_RECEIVED_SUCCESS', () => {
    expect(recipeReducerState.list).toEqual([]);

    recipeReducerState = recipeReducer(undefined, {type: RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS, payload: 'bar'});

    expect(recipeReducerState).toEqual({...DEFAULT_STATE, list: 'bar', isError: false});
  });

  it('should handle RECIPES_RECEIVED_ERROR', () => {
    expect(recipeReducerState.isError).toBe(false);

    recipeReducerState = recipeReducer(undefined, {type: RECIPE_ACTIONS.RECIPES_RECEIVED_ERROR, payload: 'bar'});

    expect(recipeReducerState).toEqual({...DEFAULT_STATE, list: [], isError: true});
  });

  it('should handle UPDATE_SEARCH_FIELD_VALUE', () => {
    expect(recipeReducerState.searchFieldValue).toBe(null);
    
    recipeReducerState = recipeReducer(undefined, {type: RECIPE_ACTIONS.UPDATE_SEARCH_FIELD_VALUE, payload: 'bar'});
    
    expect(recipeReducerState).toEqual({...DEFAULT_STATE, searchFieldValue: 'bar'});
    expect(recipeReducerState.list).toEqual([]);
    expect(recipeReducerState.isError).toBe(false);
  });

  it('should handle SET_SELECTED_RECIPE_ID', () => {
    expect(recipeReducerState.selectedRecipeId).toBe(null);

    recipeReducerState = recipeReducer(undefined, {type: RECIPE_ACTIONS.SET_SELECTED_RECIPE_ID, payload: 'bar'});

    expect(recipeReducerState).toEqual({...DEFAULT_STATE, selectedRecipeId: 'bar'});
    expect(recipeReducerState.list).toEqual([]);
    expect(recipeReducerState.isError).toBe(false);
  });

  it('should handle SET_SEARCH_TYPE', () => {
    expect(recipeReducerState.searchType).toBe(null);

    recipeReducerState = recipeReducer(undefined, {type: RECIPE_ACTIONS.SET_SEARCH_TYPE, payload: 'bar'});

    expect(recipeReducerState).toEqual({...DEFAULT_STATE, searchType: 'bar'});
    expect(recipeReducerState.list).toEqual([]);
    expect(recipeReducerState.isError).toBe(false);
  });
});
