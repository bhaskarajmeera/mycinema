import React from 'react'
import { MovieCard } from './MovieCard';

export const Display = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
          <div className='col'>
                <div className='btn-group'>
                      <button type="button" className="btn btn-primary">All</button>
                      <button type="button" className="btn btn-warning"> Drama </button>
                      <button type="button" className="btn btn-info">Action</button>
                </div>
          </div>
      </div>
      <div className='mt-3'>
            <p>2 movies listed </p>
          </div>
          <div className="row">
            <div className="col">
              {new Array(10).fill("").map((item,i)=>(<MovieCard key={i}/>))}
              <MovieCard/>
            </div>
          </div>
      

    </div>
   
  );
};
