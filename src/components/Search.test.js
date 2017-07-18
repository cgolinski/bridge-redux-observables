import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Search, submitSearch } from './Search';

it('renders without crashing', () => {
  const props = {
    searchFieldValue: 'pie',
    updateSearchFieldValue: () => {},
    setSearchType: () => {},
  };

  const div = document.createElement('div');
  ReactDOM.render(<Search {...props} />, div);
});

it('renders correct number of input child nodes', () => {
  const props = {
    setSearchType: () => {},
  };

  const wrapper = shallow ((
    <Search {...props} />
  ));

  expect(wrapper.find('input')).toHaveLength(4);
});

it('renders correct input value', () => {
  const props = {
    searchFieldValue: 'pie',
    setSearchType: () => {},
  };

  const wrapper = shallow ((
    <Search {...props}/>
  ));

  expect(wrapper.find('input').at(0).props().value).toBe('pie');
});

it('submitSearch switches on searchType (name) correctly', () => {
  const searchFieldValue = '';
  const searchType = 'name'; 
  const getRecipeByName = () => {};
  const getRecipeByCalories = () => {};

  expect(submitSearch(searchFieldValue, searchType, getRecipeByName, getRecipeByCalories)).toBe(getRecipeByName(searchFieldValue));
});

it('submitSearch switches on searchType (maxCalories) correctly', () => {
  const searchFieldValue = '';
  const searchType = 'maxCalories'; 
  const getRecipeByName = () => {};
  const getRecipeByCalories = () => {};

  expect(submitSearch(searchFieldValue, searchType, getRecipeByName, getRecipeByCalories)).toBe(getRecipeByCalories(searchFieldValue));
});