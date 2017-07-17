import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Search } from './Search';

it('renders without crashing', () => {
  const props = {
    searchFieldValue: 'pie',
    updateSearchFieldValue: () => {},
  };

  const div = document.createElement('div');
  ReactDOM.render(<Search {...props} />, div);
});

it('renders correct number of child nodes', () => {
  const wrapper = shallow ((
    <Search />
  ));

  expect(wrapper.find('input')).toHaveLength(1);
});

it('renders correct input value', () => {
  const props = {
    searchFieldValue: 'pie',
  };

  const wrapper = shallow ((
    <Search {...props}/>
  ));

  expect(wrapper.find('input').props().value).toBe('pie');
});
