import React from 'react';
import {useParams, Link} from 'react-router-dom'


function Description({movies}) {

const {id} = useParams()

    return (
        <div>
        <Link to="/">Go Back To Home Page</Link>
        <h1>Description Page</h1>
        <h4>Description</h4>
        <p>{movies.find(el => el.id == id).description}</p>
        <a href={movies.find(el => el.id == id).Trailer}> Trailer Video</a>
        </div>
    )
}

export default Description
