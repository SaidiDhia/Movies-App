//.jsx taatic licon ta3 latome 3le jnab toslo7 juste bch talla3 lcomponents w t5allihom dhahrin

import React from "react";

const MovieCard = ({ movie }) => {//movie1 3addineha ka prop me ktebnech props bch me to93odch tekteb feha 9bal koll movie1
    return (
        <div className="movie">
            <div>
                <p style={{ color: 'white' }}>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;