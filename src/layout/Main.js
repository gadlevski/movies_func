import React, { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import Header from '../components/Header';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)

  const searchMovies = (str, type = 'all') => {
    setLoading(true)
    let tail = type !== 'all' ? `&type=${type}` : ''
    console.log(tail);

    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${tail}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search)
      })
      .catch(err => {
        console.error(err);
        setLoading(false)
      })
  };

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=children`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setLoading(false)

      })
      .catch(err => {
        console.error(err);
        setLoading(false)
      })

  }, [])




  return (
    <>
      <Header sm={searchMovies} />

      <div className='container'>

        <Search searchMovies={searchMovies} />

        {loading ? (
          <Preloader />
        ) : (
          <Movies movies={movies} />
        )}
      </div>
    </>
  );

}

export default Main;
