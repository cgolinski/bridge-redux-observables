import React from 'react';

export const submitSearch = (searchFieldValue, searchType, getRecipeByName, getRecipeByCalories, getRecipesByIngredient) => {
  
  switch(searchType) {
    case 'name':
      return getRecipeByName(searchFieldValue);

    case 'maxCalories':
      return getRecipeByCalories(searchFieldValue);

    case 'ingredient':
      return getRecipesByIngredient(searchFieldValue);

    default:
      return getRecipeByName(searchFieldValue);
  }
};

export const Search = props =>
  (
    <div className="Search-container">
      <input type="text" value={props.searchFieldValue} onChange={ev => props.updateSearchFieldValue(ev.target.value)} />
      <button
        type="button"
        onClick={() => submitSearch(props.searchFieldValue, props.searchType, props.getRecipeByName, props.getRecipeByCalories, props.getRecipesByIngredient)}
        disabled={!props.searchFieldValue || !props.searchType}
      >Search</button>
      <div>
        Search by:
        <label>
          <input
            name="searchTypeSelector"
            type="radio"
            value="name"
            onClick={props.setSearchType.bind(null, 'name')}
          />
          name
        </label>
        <label>
          <input
            name="searchTypeSelector"
            type="radio"
            value="maxCalories"
            onClick={props.setSearchType.bind(null, 'maxCalories')}
          />
          max calories
        </label>
        <label>
          <input 
            name="searchTypeSelector" 
            type="radio" 
            value="ingredient" 
            onClick={props.setSearchType.bind(null, 'ingredient')} 
          />
          ingredient
        </label>
      </div>
    </div>
  );