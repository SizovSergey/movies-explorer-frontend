import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import movies from '../../utils/movies';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SavedMovies = ({ isLogin }) => {
    return (
        <main className='saved-movies'>
            <Header isLogin={isLogin} />
            <SearchForm />
            <MoviesCardList movies={movies} />
            <Footer />
        </main>
    );
}

export default SavedMovies;