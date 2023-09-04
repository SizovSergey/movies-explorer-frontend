import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getMovies from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import { filterMoviesByText, filterMoviesByShort } from '../../utils/utils';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    const storedSearchText = localStorage.getItem('searchText');
    const storedIsShort = localStorage.getItem('isShort');

    if (storedMovies) {
      setMovies(storedMovies);
    }

    if (storedSearchText) {
      setSearchText(storedSearchText);
    }

    if (storedIsShort) {
      setIsShort(storedIsShort === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    localStorage.setItem('searchText', searchText);
    localStorage.setItem('isShort', isShort);
  }, [movies, filteredMovies, searchText, isShort]);
  

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleShortCheckboxChange = () => {
    setIsShort(!isShort);
  };

  const handleSearch = () => {
    setIsLoading(true);
  
    getMovies()
      .then((allMovies) => {

        setMovies(allMovies);
  
        const filteredByText = filterMoviesByText(allMovies, searchText);
        const filteredByShort = filterMoviesByShort(filteredByText, isShort);
  
        setFilteredMovies(filteredByShort);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setIsLoading(false);
      });
  };
  
  const handleSearchButtonClick = () => {
    if (searchText) {
      handleSearch();
    }
  };


  return (
    <main className="movies">
      {console.log(filteredMovies)}
      <SearchForm
        inputValue={searchText} 
        onSearch={handleSearchButtonClick}
        onInputChange={handleSearchInputChange}
        onCheckboxChange={handleShortCheckboxChange}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={filteredMovies} />
      )}
      <button className="movies__button-more">Eщё</button>
    </main>
  );
};

export default Movies;
