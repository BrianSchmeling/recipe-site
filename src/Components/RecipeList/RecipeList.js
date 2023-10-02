import React from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

const RecipeList = (props) => {
  const showRecipes = props.recipes.map((recipe) => {
    return (
      <div key={recipe._id}>
        <Link to={"/recipes/" + recipe._id} className="link">
          {recipe.mealName}
        </Link>
        <p>{recipe.description}</p>
      </div>
    );
  });

  return <div>{showRecipes}</div>;
};

export default RecipeList;
