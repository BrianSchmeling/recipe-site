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

  const ingredients = () => {
    console.log(foundRecipe);
  };

  useDidMountEffect(() => {
    ingredients();
  }, [foundRecipe]);

  //   if (foundRecipe != undefined) {
  //     // ingredients();
  //     console.log("h");
  //   }

  return (
    <div className="mainDiv">
      {foundRecipe ? (
        <div>
          <h1>{foundRecipe.mealName}</h1>
          <h2>{foundRecipe.description}</h2>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ShowRecipe;
