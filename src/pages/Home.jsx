import React from "react";
import { useContext } from "react";
import { RecipeContext } from "../context/GeneralContext";
const Home = () => {
  const data = useContext(RecipeContext);
  console.log(data);
  return <div>Home</div>;
};

export default Home;
