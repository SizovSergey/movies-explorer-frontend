import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {
  const location = useLocation();

  return (
    <section className={location.pathname === '/saved-movies' ? `movies-card-list movies-card-list_savepage` : 'movies-card-list'}>
      {movies &&
        movies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              movie={movie}
            />
          )
        })}
    </section>
  );
}

export default MoviesCardList;
