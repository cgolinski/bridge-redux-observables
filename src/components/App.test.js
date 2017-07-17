import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App';
import { Search } from './Search';
import { RecipeList } from './RecipeList';
import { RecipeDetail } from './RecipeDetail';

it('renders without crashing', () => {
    
  const props = {
    test: 'foo',
    recipeList: [{uri: 'www.recipe.com', label: 'Pumpkin Pie', image: 'www.image.com', url: 'www.recipeorigin.com', ingredientLines: ['a', 'b']}, {uri: 'www.recipe.com2', label: 'Pumpkin Pie2', image: 'www.image.com2', url: 'www.recipeorigin.com2', ingredientLines: ['a2', 'b2']}],
    searchFieldValue: 'pie',
    selectedRecipeId: 'www.recipe.com',
    selectedRecipeDetail: {uri: 'www.recipe.com', label: 'Pumpkin Pie', image: 'www.image.com', url: 'www.recipeorigin.com', ingredientLines: ['a', 'b']},
    getRecipeByName: () => {},
    updateSearchFieldValue: () => {},
    setSelectedRecipeId: () => {},
  };

  const div = document.createElement('div');
  ReactDOM.render(<App {...props} />, div);
});

it('renders child node: Search', () => {
  const wrapper = shallow((
    <App />
  ));
  expect(wrapper.find(Search)).toHaveLength(1);
});

it('renders child node: RecipeList', () => {
  const wrapper = shallow((
    <App />
  ));
  expect(wrapper.find(RecipeList)).toHaveLength(1);
});

it('renders child node, RecipeDetail, when selectedRecipeDetail prop is received and truthy', () => {
  const props = {
    selectedRecipeDetail: {uri: 'www.recipe.com', label: 'Pumpkin Pie', image: 'www.image.com', url: 'www.recipeorigin.com', ingredientLines: ['a', 'b']},
  };

  const wrapper = shallow((
    <App {...props} />
  ));
  expect(wrapper.find(RecipeDetail)).toHaveLength(1);
});

it('should not render child node, RecipeDetail, when selectedRecipeDetail prop is received and falsey', () => {
  const props = {
    selectedRecipeDetail: null,
  };

  const wrapper = shallow((
    <App {...props} />
  ));
  expect(wrapper.find(RecipeDetail)).toHaveLength(0);
});


//Each component renders without crashing

//Each component returns what it's supposed to return, when the expected props are received

//Each component renders the correct number of inner components (when supposed to return 
//a list) E.g. RecipeList components

//Renders the correct props

//Each component throws an appropriate error message when the incorrect props are received

