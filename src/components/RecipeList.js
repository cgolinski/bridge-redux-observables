import React from 'react';

export const RecipeList = props =>
  (
    <div className="Recipe-list">
      <h2>Results</h2>
      {
        props.searchType === 'maxCalories'
          ? props.recipeList.map(recipe => 
              recipe.calories / recipe.yield <= props.searchFieldValue
                ? <h3 className="recipe-list-item" key={recipe.uri} onClick={()=>props.setSelectedRecipeId(recipe.uri)}>{recipe.label}</h3>
                : null)
          // : props.searchType === 'ingredient'
          //   ? props.recipeList
          //     .filter(recipe => recipe.ingredientLines
          //       .map(ingredient => ingredient.includes(props.searchFieldValue)))
          //     .map(recipe => 
          //       <h3 
          //         className="recipe-list-item" 
          //         key={recipe.uri} 
          //         onClick={()=>props.setSelectedRecipeId(recipe.uri)}
          //       >{recipe.label}</h3>)
            : props.searchType === 'name'
              ? props.recipeList.map(recipe => <h3 className="recipe-list-item" key={recipe.uri} onClick={()=>props.setSelectedRecipeId(recipe.uri)}>{recipe.label}</h3>)
              : null
      }
    </div>
  );

  //list []
    //ingredientLines []
      //filter .includes

