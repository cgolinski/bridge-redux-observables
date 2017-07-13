import { SEARCH_ACTIONS } from '../actions/search.actions';

const DEFAULT_STATE = {
  searchFieldValue: '',
  selectedRecipe: null,
};

export default (state = DEFAULT_STATE, action) => {

  switch(action.type) {

    case SEARCH_ACTIONS.UPDATE_SEARCH_FIELD_VALUE:
      return { ...state, searchFieldValue: action.payload.target.value };

    case SEARCH_ACTIONS.SET_SELECTED_RECIPE:
      return { selectedRecipe: action.payload}; 
      //This is not right. What needs to be stored to state?
      //Maybe store the key, and then render the detailed recipe with that key?

    default:
      return state;
  }
};
