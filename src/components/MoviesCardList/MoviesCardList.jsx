import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {
    const location = useLocation();

    const filteredMovies = location.pathname === '/saved-movies'
        ? movies.filter((movie) => movie.isFavorite)
        : movies;

    return (
        <section className={location.pathname === '/saved-movies' ? `movies-card-list movies-card-list_savepage` : 'movies-card-list'}>
            {filteredMovies.map((movie) => (
                <MoviesCard
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </section>
    );
}

export default MoviesCardList;