import React from 'react'

export const MovieCard = ({searchedMovie}) => {
const {Poster,Title,imdbRatings,Plot}= searchedMovie;
  
  return (
    <div className='containert movie-card-item mt-5'>
      <div className='row text-dark p-3'>
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>{Title}</h3>
          <p>IMDB Rating : {imdbRatings}</p>
          <p>{Plot}</p>
          <div className='d-flex justify-content-between'>
            <button type="button" className="btn btn-warning"> Drama </button>
            <button type="button" className="btn btn-primary">Action</button>
          </div>
          <div className='d-grid mt-3'>
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
          
          
        </div>
      </div>
      
    </div>
  )
}
