import React from 'react';
import { Search } from './Search';
import { RecipeList } from './RecipeList';
import { RecipeDetail } from './RecipeDetail';
import '../App.css';
import { connect } from 'react-redux';
import { getRecipeByName, updateSearchFieldValue, setSelectedRecipe } from '../redux/actions/recipe.actions';
// import { updateSearchFieldValue, setSelectedRecipe } from '../redux/actions/search.actions';


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
     {/* <p className="App-intro">
        <button onClick={() => props.getRecipeByName('omelet')}>Click me for Omelet</button>
      </p>*/}
      <Search 
        searchFieldValue={props.searchFieldValue}
        updateSearchFieldValue={props.updateSearchFieldValue}
        getRecipeByName={props.getRecipeByName}
      />
      <RecipeList 
        recipeList={props.recipeList}
        setSelectedRecipe={props.setSelectedRecipe}
      />
      {props.selectedRecipe 
        ? <RecipeDetail 
            recipeList={props.recipeList}
            selectedRecipe={props.selectedRecipe}
          /> 
        : null}
    </div>
  );



//TO DO:
//Should I save the entire recipe to selectedRecipe instead of just the key? Would that be faster to load, rather than mapping through the entire recipeList?
//...or would that be un-DRY?
  //Leave it as is. Convert array of recipe objects to be object of recipe objects
  //...with each recipe object represented by its key (copy of key inside object)

//QUESTIONS:
//Why is there an error in the console: 'synthetic event is reused...'

const connectConfig = connect(state => ({
  test: 'foo', // how could I potentially apply the value of the reducer on line 6 of reducers/index.js?
  recipeList: state.recipe.list,
  searchFieldValue: state.recipe.searchFieldValue,
  selectedRecipe: state.recipe.selectedRecipe,
}), {
  getRecipeByName: getRecipeByName, // how can we simplify this, do we remember?
  updateSearchFieldValue: updateSearchFieldValue,
  setSelectedRecipe: setSelectedRecipe,
});


export default connectConfig(App);
