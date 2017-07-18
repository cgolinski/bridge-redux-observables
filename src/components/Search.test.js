import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Search } from './Search';

it('renders without crashing', () => {
  const props = {
    searchFieldValue: 'pie',
    updateSearchFieldValue: () => {},
    setSearchType: () => {},
  };

  const div = document.createElement('div');
  ReactDOM.render(<Search {...props} />, div);
});

it('renders correct number of child nodes', () => {
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
