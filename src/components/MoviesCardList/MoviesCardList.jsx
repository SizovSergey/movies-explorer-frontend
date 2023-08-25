import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {
    const location = useLocation();

    const filteredMovies = location.pathname === '/saved-movies'
        ? movies.filter((movie) => movie.isFavorite)
        : movies;

    return (
        <section className='MoviesCardList'>
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