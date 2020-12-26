import React from 'react'

function Filter({text, setText, searchingStars, reset, FilterByName, FilterByRate}) {

const FilterByNameFunction = () => {FilterByName(text); setText('');}

const FilterByRateFunction = () => {FilterByRate(); reset()}

return (
    <div className="Filter">
        <diV>
            <input className="searchInput" type='text' placeholder="search movies" value={text} onChange={e => setText(e.target.value)}/> 
            <button className="FilterByName" onClick={FilterByNameFunction} >Filter By Name</button>
        </diV>
        <p className="stars">{searchingStars}</p>
        <button className="reset" onClick={reset}>Reset</button>
        <button className="FilterByRate" onClick={FilterByRateFunction}>Filter By Rate</button>
    </div>
    )
}

export default Filter
