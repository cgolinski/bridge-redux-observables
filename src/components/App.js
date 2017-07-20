//TO DO: 
//Update search input field onchange:
  //onChange={props.setSearchField} 
  //(above) this way the reducer needs to access ev.target.value. But reducer is not supposed to manipulate data, it’s only ever supposed to store stuff to state.
  //onChange={ev => props.setSearchField(ev.target.value)}
  //(above) so this way is better, and then the reducer can just searchFieldValue: action.payload

//Search by ingredient
  //in order to return a list of recipes
  //make a new epic: search by ingredient, that is the same as search by calories
  //but takes gte=0 (gte%200)
    //seems to be calling getbyCalorie not getAllRecipes. Not sure why
//Add test for searching by ingredient
//Add/remove unit test for any other changes

//QUESTIONS:
//Why is there an error in the console: 'synthetic event is reused...'
//Are epic errors set up correctly?


import React from 'react';
import { Search } from './Search';
import { RecipeList } from './RecipeList';
import { RecipeDetail } from './RecipeDetail';
import '../App.css';
import { connect } from 'react-redux';
import { getRecipeByName, getRecipeByCalories, getAllRecipes, updateSearchFieldValue, setSelectedRecipeId, setSearchType } from '../redux/actions/recipe.actions';
import { selectedRecipeDetail } from '../redux/reducers/recipe.reducer.js';


// remember, props should now have data coming in from redux state!
// because of this, we don't even need to make our 'top level' components stateful!
//const App = ({recipeList, getRecipeByName})
export const App = props =>
  (
    <div className="App">
      <div className="App-header">
        {props.test}
        <h2>Welcome to <span className="strike">React</span> Redux-Observable!</h2>
      </div>
     {/* <p className="App-intro">
        <button onClick={() => props.getRecipeByName('omelet')}>Click me for Omelet</button>
      </p>*/}
      <Search 
        searchFieldValue={props.searchFieldValue}
        updateSearchFieldValue={props.updateSearchFieldValue}
        getRecipeByName={props.getRecipeByName}
        getRecipeByCalories={props.getRecipeByCalories}
        getAllRecipes={props.getAllRecipes}
        searchType={props.searchType}
        setSearchType={props.setSearchType}
      />
      {
        props.isError
        ? <p className="error-message"> There was an error. Please try again. </p>
        : null
      }
      {
        props.recipeList.length > 0
        ? <RecipeList 
            recipeList={props.recipeList}
            setSelectedRecipeId={props.setSelectedRecipeId}
            isError={props.isError}
            searchType={props.searchType}
            searchFieldValue={props.searchFieldValue}
          />
        : null
      } 
      {
        props.selectedRecipeDetail
        ? <RecipeDetail 
            recipeList={props.recipeList}
            selectedRecipeId={props.selectedRecipeId}
            selectedRecipeDetail={props.selectedRecipeDetail}
          /> 
        : null
      }
    </div>
  );

const connectConfig = connect(state => ({
  test: 'foo', // how could I potentially apply the value of the reducer on line 6 of reducers/index.js?
  recipeList: state.recipe.list,
  searchFieldValue: state.recipe.searchFieldValue,
  selectedRecipeId: state.recipe.selectedRecipeId,
  selectedRecipeDetail: selectedRecipeDetail(state),
  isError: state.recipe.isError,
  searchType: state.recipe.searchType,
}), {
  getRecipeByName: getRecipeByName, // how can we simplify this, do we remember?
  getRecipeByCalories: getRecipeByCalories,
  getAllRecipes: getAllRecipes,
  updateSearchFieldValue: updateSearchFieldValue,
  setSelectedRecipeId: setSelectedRecipeId,
  setSearchType: setSearchType,
});


export default connectConfig(App);
