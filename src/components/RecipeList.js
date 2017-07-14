import React from 'react';

export const RecipeList = props =>
  (
    <div className="Recipe-list">
      <h2>Results</h2>
      {props.recipeList.map(recipe => <h3 className="recipe-list-item" key={recipe.uri} onClick={()=>props.setSelectedRecipe(recipe.uri)}>{recipe.label}</h3>)}
    </div>
  );