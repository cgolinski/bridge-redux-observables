import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { RecipeList } from './RecipeList';


it('renders without crashing', () => {
    
  const props = {
    recipeList: [{uri: 'www.recipe.com', label: 'Pumpkin Pie', image: 'www.image.com', url: 'www.recipeorigin.com', ingredientLines: ['a', 'b']}, {uri: 'www.recipe.com2', label: 'Pumpkin Pie2', image: 'www.image.com2', url: 'www.recipeorigin.com2', ingredientLines: ['a2', 'b2']}],
  };

  const div = document.createElement('div');
  ReactDOM.render(<RecipeList {...props} />, div);
});

it('renders correct number of child nodes when props received', () => {
  const props = {
    recipeList: [{uri: 'www.recipe.com', label: 'Pumpkin Pie', image: 'www.image.com', url: 'www.recipeorigin.com', ingredientLines: ['a', 'b']}, {uri: 'www.recipe.com2', label: 'Pumpkin Pie2', image: 'www.image.com2', url: 'www.recipeorigin.com2', ingredientLines: ['a2', 'b2']}],
  };

  const wrapper = shallow((
    <RecipeList {...props}/>
  ));

  expect(wrapper.find('.recipe-list-item')).toHaveLength(2);
});

it('renders correct number of child nodes when recipeList prop is empty', () => {
  const props = {
    recipeList: [],
  };

  const wrapper = shallow((
    <RecipeList {...props}/>
  ));

  expect(wrapper.find('.recipe-list-item')).toHaveLength(0);
});

it('renders correct number of child nodes when searchType is calories', () => {
  const props = {
    recipeList: [{uri: 'www.', label: 'Pie', image: 'www.', url: 'www.', ingredientLines: ['a', 'b'], calories: 200, yield: 2}, {uri: 'www.', label: 'Pie', image: 'www.', url: 'www.', ingredientLines: ['a', 'b'], calories: 1000, yield: 3}],
    searchFieldValue: 100, 
    searchType: 'calories',
  };

  const wrapper = shallow ((
    <RecipeList {...props} />
  ));

  expect(wrapper.find('.recipe-list-item')).toHaveLength(1);
});