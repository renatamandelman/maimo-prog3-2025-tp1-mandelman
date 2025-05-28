"use client";
import Link from "next/link";
import axios from "axios";

import { useState, useEffect } from "react";
import Loading from "@/app/components/Loading";

const InfoRecipe = ({ id }) => {
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getRecipe = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.log("el error es:" + error);
        setError(true);
      }
    };
    getRecipe();
  }, [id]);
  return (
    !loading && (
      <div className="recipe">
        <section
          className="hero"
          style={{ backgroundImage: `url('${recipe.image}')` }}
        >
          <Link className="cornerIcon" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"
              />
            </svg>
          </Link>
          <h1>{recipe.name}</h1>
        </section>

        <section className="extraInfo">
          <div className="infoCard">
            <div>
              <p>
                <strong>Time</strong>
                <br />
                {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
              </p>
            </div>
            <div>
              <p>
                <strong>Portion</strong>
                <br />
                {recipe.servings} persons
              </p>
            </div>
            <div>
              <p>
                <strong>Difficulty</strong>
                <br />
                {recipe.difficulty}
              </p>
            </div>
          </div>
        </section>

        <section className="informationSection">
          <div className="information">
            <div className="ingredients">
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients?.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
              <ul>
                {recipe.instructions?.map((instruction, i) => (
                  <li key={i}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {loading && <Loading />}

        {error && "Hubo un error"}
      </div>
    )
  );
};

export default InfoRecipe;
