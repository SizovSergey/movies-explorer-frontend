import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import movies from '../../utils/movies';

const SavedMovies = ({ isLogin }) => {
    return (
        <main className='saved-movies'>
            <SearchForm />
            <MoviesCardList movies={movies} />
        </main>
    );
}

export default SavedMovies;