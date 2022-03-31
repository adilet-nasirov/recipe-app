import React from "react";
import { useState, createContext } from "react";

export const RecipeContext = createContext([]);

export const GeneralProvider = ({ children }) => {
  const data = [{ name: "Adilet" }, { name: "DOni", surname: "Jack" }];
  return (
    <RecipeContext.Provider value={data}>{children}</RecipeContext.Provider>
  );
};
