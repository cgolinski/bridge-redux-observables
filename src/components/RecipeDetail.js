import React from 'react';

export const RecipeDetail = props =>
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