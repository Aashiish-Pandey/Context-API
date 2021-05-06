import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "harry potter",
      price: "10$",
      id: 23124,
    },
    {
      name: "Game of thrones",
      price: "10$",
      id: 23121014,
    },
    {
      name: "Inception",
      price: "10$",
      id: 2319124,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies,setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
