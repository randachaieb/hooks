import React,{useState} from 'react';
import './App.css';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Rate from './Rate'
import Filter from './Filter';
import { Route, BrowserRouter as  Router, Switch } from 'react-router-dom';
import Description from "./Description";




function App() {

const [rating, setRating] = useState(0);
const [hoverRating, setHoverRating] = useState(0);
const onMouseEnter = (index) => {
      setHoverRating(index);
  };
const onMouseLeave = () => {
    setHoverRating(0);
  };
const onSaveRating = (index) => {
    setRating(index);
  };

const [movies , setMovies] = useState([{id:0, title:'Badboys', postURL: '/badboys.jpeg', rate: 2, description: 'Bad Boys is a 1995 American action comedy film directed by Michael Bay', Trailer:'https://www.youtube.com/watch?v=jKCj3XuPG8M' } , 
{id:1, title:'Extraction', postURL: '/extraction.jfif', rate:3, description: 'Extraction is a 2020 American action-thriller film starring Chris Hemsworth and released on Netflix', Trailer:'https://www.youtube.com/watch?v=L6P3nI6VnlY'} ,
{id:2, title:'Titanic', postURL: '/titanic.jfif', rate: 5, description: 'Titanic is a 1997 American epic romantic disaster movie. It was directed, written, and co-produced by James Cameron. The movie is about the 1912 sinking of the RMS Titanic. ... They fall in love after meeting aboard the ship, but it was not good for a rich girl to fall in love with a poor boy in 1912.', Trailer:'https://www.youtube.com/watch?v=CHekzSiZjrY'} ,
{id:3, title:'Superman', postURL: '/superman.jpg', rate: 4, description: 'Superman (also known as Superman: The Movie) is a 1978 superhero film directed by Richard Donner and written by Mario Puzo, David Newman, Leslie Newman, and Robert Benton from a story by Puzo based on the DC Comics character of the same name', Trailer:'https://www.youtube.com/watch?v=pUwxH4SM9Rg'}
])

const handleAdd = (newMovie) => setMovies([...movies , newMovie]) 

const [text, setText] = useState("");

const FilterByName = () => setMovies(movies.filter(el => el.title.toLowerCase().includes(text.toLowerCase())))

const FilterByRate = () => setMovies(movies.filter(el => el.rate === rating))

return (
<div className="App"> 

<Router>

<Route exact path="/" render={ () => 

<>
<h1>Home Page</h1>
<Filter FilterByRate={FilterByRate} text={text} setText={setText} FilterByName={FilterByName} reset={() =>setRating(0)} searchingStars = {[1, 2, 3, 4, 5].map((index) => {return (<div onClick={() => onSaveRating(index)} onMouseEnter={() => onMouseEnter(index)} onMouseLeave={() => onMouseLeave()}>
    <Rate index={index} rating={rating} hoverRating={hoverRating}/> </div>)})}
/>
<MovieList FilterByName={FilterByName} FilterByRate={FilterByRate} movies={movies} />
<AddMovie handleAdd={handleAdd}/> 
</> 

} />

<Route path="/description/:id"  render={ () => <Description movies={movies}/> }  /> 

</Router>

</div> 


  );
}

export default App;
