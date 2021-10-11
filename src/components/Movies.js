import React from 'react';
import Movie from './Movie';

function Movies(props) {

  const { movies = [] } = props;

  return (
    <>
      <div className='movies'>
        {movies.length ? props.movies.map((item) => {
          return <Movie key={item.imdbID} {...item} />;
        }) : <h4>Ничего не найдено</h4>
        }
      </div>
    </>
  );
}

export default Movies;
