import React from "react";
import { Link } from "react-router-dom";

const RecipeList = (props) => {
  const showRecipes = props.recipes.map((recipe) => {
    return (
      <div>
        <Link>
          <h2>{recipe.mealName}</h2>
          <p>{recipe.description}</p>
        </Link>
      </div>
    );
  });

  return <div>{showRecipes}</div>;
};

export default RecipeList;
