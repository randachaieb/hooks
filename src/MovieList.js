import React from 'react';
import MovieCard from './MovieCard';


function MovieList({movies,FilterByName, FilterByRate}) {
    return (
        <div>
        {FilterByName}
        {FilterByRate}
        {movies.map(el =>  <MovieCard key={el.id} el={el} />)}
        </div>
    )
}

export default MovieList
