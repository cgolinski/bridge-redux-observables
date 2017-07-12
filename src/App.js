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
      <Search 
        searchFieldValue={props.searchFieldValue}
        updateSearchFieldValue={props.updateSearchFieldValue}
        getRecipeByName={props.getRecipeByName}
      />
      <RecipeList 
        recipeList={props.recipeList}
      />
    </div>
  );

const Search = props =>
  (
    <div className="Search-container">
      <input type="text" placeholder="enter ingredient" value={props.searchFieldValue} onChange={props.updateSearchFieldValue} />
      <button 
        type="button" 
        onClick={() => submitSearch(props.searchFieldValue, props.getRecipeByName)}
      >Search</button>
    </div>
  );

const RecipeList = props =>
  (
    <div className="Recipe-list">
      <h2>Results</h2>
      {props.recipeList.map(recipe => <h3 className="recipe-list-item" key={recipe.uri} onClick={()=>{}}>{recipe.label}</h3>)}
    </div>
  );

//TO DO:
//Make each recipe title clickable
//When click on recipe, set as selected recipe in state
//which automatically renders detailed recipe component

//QUESTIONS:
//Why is there an error in the console: 'synthetic event is reused...'

const connectConfig = connect(state => ({
  test: 'foo', // how could I potentially apply the value of the reducer on line 6 of reducers/index.js?
  recipeList: state.recipe.list,
  searchFieldValue: state.search.searchFieldValue,
}), {
  getRecipeByName: getRecipeByName, // how can we simplify this, do we remember?
  updateSearchFieldValue: updateSearchFieldValue,
});


export default connectConfig(App);
