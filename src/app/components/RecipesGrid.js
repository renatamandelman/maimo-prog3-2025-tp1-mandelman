"use client";

import { useState, useEffect } from "react";
import RecipesCard from "@/app/components/RecipesCard";
import parsedData from "@/data/recipes";
import axios from "axios";
import Loading from "@/app/components/Loading";
const RecipesGrid = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://dummyjson.com/recipes?limit=20&skip=0"
        );
        const responseData = response.data.recipes;
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.log("el error es:" + error);
        setError(true);
      }
    };
    getData();
  }, []);

  return (
    <div className="recetas_grid recipes_grid">
      {!loading &&
        data.map(({ id, name, image, cuisine }) => (
          <RecipesCard
            key={id}
            name={name}
            image={image}
            cuisine={cuisine}
            id={id}
          />
        ))}
      {loading && <Loading/>}
      {error && "Hubo un error"}
    </div>
  );
};

export default RecipesGrid;
