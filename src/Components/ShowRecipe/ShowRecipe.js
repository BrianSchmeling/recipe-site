import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowRecipe = (props) => {
  const [foundRecipe, setFoundRecipe] = useState();
  const recipeId = useParams().id;
  console.log(recipeId);

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

  console.log(foundRecipe);

  useEffect(() => {
    findRecipe();
  }, []);

  return (
    <div>
      {foundRecipe ? (
        <div>
          <h1>{foundRecipe.mealName}</h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ShowRecipe;
