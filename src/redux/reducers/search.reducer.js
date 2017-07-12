import { SEARCH_ACTIONS } from '../actions/search.actions';

const DEFAULT_STATE = {
  searchFieldValue: '',
};

export default (state = DEFAULT_STATE, action) => {

  switch(action.type) {

    case SEARCH_ACTIONS.UPDATE_SEARCH_FIELD_VALUE:
      return { ...state, searchFieldValue: action.payload.target.value };

    default:
      return state;
  }
};
