import React from 'react';

const submitSearch = (searchFieldValue, getRecipeByName) => {
  return getRecipeByName(searchFieldValue);
};

export const Search = props =>
  (
    <div className="Search-container">
      <input type="text" placeholder="enter ingredient" value={props.searchFieldValue} onChange={props.updateSearchFieldValue} />
      <button 
        type="button" 
        onClick={() => submitSearch(props.searchFieldValue, props.getRecipeByName)}
      >Search</button>
    </div>
  );