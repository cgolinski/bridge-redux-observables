import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getRecipeByName } from './redux/actions/recipe.actions';
import { updateSearchFieldValue } from './redux/actions/search.actions';


const submitSearch = (searchFieldValue, getRecipeByName) => {
  return getRecipeByName(searchFieldValue);
};

// remember, props should now have data coming in from redux state!
// because of this, we don't even need to make our 'top level' components stateful!
//const App = ({recipeList, getRecipeByName})
const App = props =>
  (
    <div className="App">
      <div className="App-header">
        {props.test}
        <h2>Welcome to <span className="strike">React</span> Redux-Observable!</h2>
      </div>
      <p className="App-intro">
        <button onClick={() => props.getRecipeByName('omelet')}>Click me for Omelet</button>
      </p>
      <p>
        <input type="text" placeholder="enter ingredient" value={props.searchFieldValue} onChange={props.updateSearchFieldValue} />
        <span>{props.searchFieldValue}</span>
        <button 
          type="button" 
          onClick={() => submitSearch(props.searchFieldValue, props.getRecipeByName)}


        >submit</button>
      </p>
      {props.recipeList.map(recipe => <h3 key={recipe.uri}>name: {recipe.label} calories: {recipe.calories}</h3>)}
    </div>
  );

//TO DO:
//Make each recipe title clickable
//When click on recipe, set as selected recipe in state
//which automatically renders detailed recipe component

const connectConfig = connect(state => ({
  test: 'foo', // how could I potentially apply the value of the reducer on line 6 of reducers/index.js?
  recipeList: state.recipe.list,
  searchFieldValue: state.search.searchFieldValue,
}), {
  getRecipeByName: getRecipeByName, // how can we simplify this, do we remember?
  updateSearchFieldValue: updateSearchFieldValue,
});


export default connectConfig(App);
