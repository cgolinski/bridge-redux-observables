import React from 'react';

export const RecipeList = props =>
  (
    <div className="Recipe-list">
      <h2>Results</h2>
      {
        props.searchType === 'calories'
          ? props.recipeList.map(recipe => 
              recipe.calories / recipe.yield === props.searchFieldValue
                ? <h3 className="recipe-list-item" key={recipe.uri} onClick={()=>props.setSelectedRecipeId(recipe.uri)}>{recipe.label}</h3>
                : null)
          : props.recipeList.map(recipe => <h3 className="recipe-list-item" key={recipe.uri} onClick={()=>props.setSelectedRecipeId(recipe.uri)}>{recipe.label}</h3>)
      }
    </div>
  );