import React from 'react'
import { MovieCard } from './MovieCard';

const movieStyle={backgroundImage:`url("https://www.omdbapi.com/src/poster.jpg")`,
    backgroundRpeat:"no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover",
    heiht:"60vh",};
export const Hero = () => {
  return (
<section>
  {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-md">
          <a class="navbar-brand" href="#">My Cinema</a>
        </div>
      </nav>
  {/* hero content */}
<div className='hero p-5' style={movieStyle}>
    <div className='text-center'>
      <h1>Search Millions of movies</h1>
      <p>Find about the movie details before watching them ....</p>
    </div>
    <div className="input-group mb-3" >
      <input type="text" className="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="button-addon2"/>
      <button className="btn btn-danger" type="button" id="button-addon2">Search</button>
    </div>
    <div className="movie-card-display">
      <MovieCard />
    </div>
</div>
</section>
  );
};
