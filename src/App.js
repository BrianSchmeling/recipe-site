import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import RecipeList from "./Components/RecipeList/RecipeList";
import ShowRecipe from "./Components/ShowRecipe/ShowRecipe";

function App() {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const response = await fetch(`http://localhost:8080/recipes`, {
        method: "GET",
        headers: { Accept: "text/json", "Content-Type": "application/json" },
      });
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipes" element={<RecipeList recipes={recipes} />} />
          <Route path={"recipes/:id"} element={<ShowRecipe />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
