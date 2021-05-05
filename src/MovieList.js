import React ,{useState} from  'react'
import Movie from './Movie'

const MovieList =()=> {

    const[movies,setMovies] = useState(
        [
            {
                name:"harry potter",
                price: '10$',
                id:23124
            },
            {
                name:"Game of thrones",
                price: '10$',
                id:23121014
            },
            {
                name:"Inception",
                price: '10$',
                id:2319124
            }

        ]
    )

    return (
        <div>
            {movies.map(movie=>(
                <Movie name ={movie.name} price = {movie.price} key = {movie.id}/>
            ))}
        </div>
    )

}

export default MovieList;