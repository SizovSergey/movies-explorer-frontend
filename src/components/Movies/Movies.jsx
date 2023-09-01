import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movies from '../../utils/movies';


const Movies = ({ isLogin }) => {

    return (
        <main className='movies'>
            <SearchForm />
            <MoviesCardList movies={movies} />
            <button className='movies__button-more'>Eщё</button>
        </main>
    );
}

export default Movies;