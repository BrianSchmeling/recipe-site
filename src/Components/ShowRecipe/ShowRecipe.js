import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useDidMountEffect from "../../Hooks/useDidMountEffect";
// useDidMountEffect functions like useEffect, except it does not run on the initial render
import "./ShowRecipe.css";

const ShowRecipe = (props) => {
  const [foundRecipe, setFoundRecipe] = useState();
  const recipeId = useParams().id;

  const findRecipe = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/recipes/${recipeId}`,
        {
          method: "GET",
          headers: { Accept: "text/json", "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      setFoundRecipe(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    findRecipe();
  }, []);

  return (
    <div className="mainDiv">
      {foundRecipe ? (
        <div className="center">
          <h1>{foundRecipe.mealName}</h1>
          <h2>{foundRecipe.description}</h2>
          <div className="displayGrid">
            <div>Ingredients</div>
            <div>Instructions</div>
            <div>
              {foundRecipe.ingredients.map((ing) => {
                return (
                  <div key={ing.name} className="ingredientBox">
                    <p>{ing.name}</p>
                    <p>{ing.count}</p>
                  </div>
                );
              })}
            </div>
            <div>
              {foundRecipe.instructions.map((ins) => {
                return (
                  <div key={ins} className="ingredientBox">
                    <p>{ins}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>Page Loading...</div>
      )}
    </div>
  );
};

export default ShowRecipe;
