import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getRecipeByName } from './redux/actions/recipe.actions';
import { updateSearchFieldValue, setSelectedRecipe } from './redux/actions/search.actions';


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
      {props.recipeList.map(recipe => <h3 className="recipe-list-item" key={recipe.uri} onClick={()=>props.setSelectedRecipe(recipe.uri)}>{recipe.label}</h3>)}
    </div>
  );

const RecipeDetail = props =>
  (
    <div className="Recipe-Detail">
      {props.recipeList.map((recipe) => {
        if (recipe.uri === props.selectedRecipe) {
          return (
            <div>
              <h2>{recipe.label}</h2>
              <img src={recipe.image}></img>
              {recipe.ingredientLines.map((ingredient) => <p>{ingredient}</p>)}
              <h3>For full instructions: <a href={recipe.url}>click here</a></h3>
            </div>
          );
        }
      })}
    </div>
  );


//TO DO:


//QUESTIONS:
//Why is there an error in the console: 'synthetic event is reused...'
//Better way to group actions and reducers in files? How to decide on categories? Need to keep observable actions in separate file?
//Should I save the entire recipe to selectedRecipe instead of just the key? Would that be faster to load, rather than mapping through the entire recipeList?
//...or would that be un-DRY?

const connectConfig = connect(state => ({
  test: 'foo', // how could I potentially apply the value of the reducer on line 6 of reducers/index.js?
  recipeList: state.recipe.list,
  searchFieldValue: state.search.searchFieldValue,
  selectedRecipe: state.search.selectedRecipe,
}), {
  getRecipeByName: getRecipeByName, // how can we simplify this, do we remember?
  updateSearchFieldValue: updateSearchFieldValue,
  setSelectedRecipe: setSelectedRecipe,
});


export default connectConfig(App);
