import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movies from '../../utils/movies';

const Movies = () => {
    return (
        <section className='movies'>
            <SearchForm />
            <MoviesCardList movies={movies} />
            <button className='movies__button-more'>Eщё</button>
        </section> 
    );
}

export default Movies;