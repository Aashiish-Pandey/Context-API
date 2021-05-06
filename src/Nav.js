import React, { useState ,useContext} from "react";
import {MovieContext} from './MovieContext'
import { MyContext } from "./MyContext";


const Nav = () => {
    const[movies, setMovies] = useContext(MovieContext)
    const[person,setPerson] = useContext(MyContext)

    
  return (
    <div>
      <h3>Ashish</h3>
      <div>list of movies: {movies.length} </div>
      {person.map(item=>(
        <div>{item.name}</div>
      ))}

     
    </div>
  );
};

export default Nav;
