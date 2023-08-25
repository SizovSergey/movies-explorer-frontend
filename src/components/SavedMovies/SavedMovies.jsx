import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import movies from '../../utils/movies';

const SavedMovies = () => {
    return (
        <section className='saved-movies'>
            <SearchForm />
            <MoviesCardList movies={movies} />
        </section> 
    );
}

export default SavedMovies;