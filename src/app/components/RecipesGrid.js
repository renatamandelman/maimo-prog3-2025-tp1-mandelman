"use client";

import { useState, useEffect } from "react";
import RecipesCard from "@/app/components/RecipesCard";
import parsedData from "@/data/recipes";
import axios from "axios";
const RecipesGrid = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://dummyjson.com/recipes?limit=20&skip=0')
      const responseData =  response.data.recipes;
      console.log(responseData)
      setData(responseData)
    }
    getData()
  }, [])




  return (
    <div className="recetas_grid recipes_grid">
      {data.map(({ id, name, image, cuisine }) => (
        <RecipesCard key={id} name={name} image={image} cuisine={cuisine} id={id} />
      ))}
    </div>
  );
};

export default RecipesGrid;
