import React, { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard.jsx";

const API_URL = "http://www.omdbapi.com?apikey=c79bfc6f"; //omdbapi hia base de donner feha les movies lkoll bch ykoun 3andk acces lezmk taaml key w tactivih fe site omdbapi.com

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const movie = {
    "Title": "Joker",
    "Year": "2019",
    "imdbID": "tt7286456",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  }

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // Use the fetched data here
    setMovies(data.Search);
  }



  useEffect(() => {
    searchMovies('Joker');
  }, [searchTerm]);//[] hethom t7otthom if u only wanna call it at the start(ya3ny to93odch t3awed fi ro77a thrghout lexecution) walla bch tzid valeur de depart

  return (
    <div className="app">
      <h1>Aflem llbi3</h1>
      <div className="search">
        <input //linput hethy ta3mllk blassa bch tktb w ttsarref feha
          placeholder="lawej 3le film"
          value={searchTerm}//hethy lvaleur li tebda maktouba par defaut baad baddalneha raddineha dynamic maach static ya3ny ttbaddel 7asb e searchTerm li t7ottha
          onChange={(e) => setSearchTerm(e.target.value)}//l e hia event ffel 7ala te3na ennek tektb 7aja

        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
          ? (
            <div className="Container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>no movies found</h2>
            </div>
          )
      }


    </div>
  );

}

//les donner mte3na kent static donc bch ne5tho l5edma li 3malneha fel les div lkoll n7ottoha fi component baad n3aytolha bligne bark
//this data is static 
//{movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} if the movie poster is NOT non-existant u put it else u put a place holder thats 400*400 and this is a given fuction to fill its place
//the div containing the movie year we put it there to add a year on top on the componet of the movie which means u can actually use this to add stuff to your components like that ken testaaml span ttla3lk mellouta 
//search.svg heky just copineha hia icon 

export default App;

