import React from 'react';

export const RecipeDetail = ({selectedRecipeDetail}) =>
  (
    <div className="Recipe-Detail">
      <h2>{selectedRecipeDetail.label}</h2>
      <img src={selectedRecipeDetail.image}></img>
      <div>Calories: {Math.floor(selectedRecipeDetail.calories)}</div>
      {selectedRecipeDetail.ingredientLines.map((ingredient) => <p>{ingredient}</p>)}
      <h3>For full instructions: <a href={selectedRecipeDetail.url}>click here</a></h3>
    </div>
  );