import React from 'react'
import { Link } from 'react-router-dom'
import Rate from './Rate'


function MovieCard({el}) { 

return (
        <div className="MovieCards">
        <Link to={`/description/${el.id}`}>
        <p className="title">{el.title}</p>
        <img className="image" src={el.postURL} alt={el.title}/> 
        <p className="moviesRate"> {[1, 2, 3, 4, 5].map((index) => {return (<Rate index={index} rating={el.rate} hoverRating={el.rate} />)})} </p>
        </Link> 
        </div>
    )
}

export default MovieCard

