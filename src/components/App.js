import React from 'react';
import { Search } from './Search';
import { RecipeList } from './RecipeList';
import { RecipeDetail } from './RecipeDetail';
import '../App.css';
import { connect } from 'react-redux';
import { getRecipeByName, updateSearchFieldValue, setSelectedRecipeId } from '../redux/actions/recipe.actions';
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
      />
      <RecipeList 
        recipeList={props.recipeList}
        setSelectedRecipeId={props.setSelectedRecipeId}
      />
      {props.selectedRecipeDetail
        ? <RecipeDetail 
            recipeList={props.recipeList}
            selectedRecipeId={props.selectedRecipeId}
            selectedRecipeDetail={props.selectedRecipeDetail}
          /> 
        : null}
    </div>
  );



//TO DO:


//QUESTIONS:
//Why is there an error in the console: 'synthetic event is reused...'

const connectConfig = connect(state => ({
  test: 'foo', // how could I potentially apply the value of the reducer on line 6 of reducers/index.js?
  recipeList: state.recipe.list,
  searchFieldValue: state.recipe.searchFieldValue,
  selectedRecipeId: state.recipe.selectedRecipeId,
  selectedRecipeDetail: selectedRecipeDetail(state),
}), {
  getRecipeByName: getRecipeByName, // how can we simplify this, do we remember?
  updateSearchFieldValue: updateSearchFieldValue,
  setSelectedRecipeId: setSelectedRecipeId,
});


export default connectConfig(App);
