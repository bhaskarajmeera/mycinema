
import './App.css'
import { Display } from './components/Display'
import { Hero } from './components/Hero'
import { useEffect, useState } from 'react'
import { fetchFromAPI } from './utils/axios';
import { randomChar } from './utils/random';

function App() {

const [searchedMovie,setSearchedMovie]= useState({});
const fetchMovie = async(str) =>
                    {
                  const movie = await fetchFromAPI(str);
                    setSearchedMovie(movie);
                  };

useEffect(()=>
  {
  fetchMovie(randomChar());},[]);

  return (
    <>
    <div className='wrapper'>
    {/* hero section */}
    <Hero  searchedMovie={searchedMovie}/>
    {/* display section */}
   <Display  searchedMovie={searchedMovie}/>
    </div>
    
    </>
  )
}

export default App
