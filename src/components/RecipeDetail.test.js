import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { RecipeDetail } from './RecipeDetail';

it('renders without crashing', () => {
  const props = {
    selectedRecipeDetail: {uri: 'www.recipe.com', label: 'Pumpkin Pie', image: 'www.image.com', url: 'www.recipeorigin.com', ingredientLines: ['a', 'b']},
  };

  const div = document.createElement('div');
  ReactDOM.render(<RecipeDetail {...props} />, div);
});

it('renders correct number of ingredients when props received', () => {
  const props = {
    selectedRecipeDetail: {uri: 'www.recipe.com', label: 'Pumpkin Pie', image: 'www.image.com', url: 'www.recipeorigin.com', ingredientLines: ['a', 'b']},
  };

  const wrapper = shallow((<RecipeDetail {...props}/>));

  expect(wrapper.find('p')).toHaveLength(2);
});

it('renders no ingredients when props.ingredientLines is empty', () => {
  const props = {
    selectedRecipeDetail: {uri: 'www.recipe.com', label: 'Pumpkin Pie', image: 'www.image.com', url: 'www.recipeorigin.com', ingredientLines: []},
  };

  const wrapper = shallow((<RecipeDetail {...props}/>));

  expect(wrapper.find('p')).toHaveLength(0);
});

