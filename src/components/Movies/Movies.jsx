import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movies from '../../utils/movies';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = ({ isLogin }) => {

    return (
        <section className='movies'>
            <Header isLogin={isLogin} />
            <SearchForm />
            <MoviesCardList movies={movies} />
            <button className='movies__button-more'>Eщё</button>
            <Footer />
        </section>
    );
}

export default Movies;