import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getMovies from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import { filterMoviesByText, filterMoviesByCheckbox } from '../../utils/utils';

const Movies = ({ isLoading, setIsLoading, openInfoPopup, handleSaveMovie, handleDeleteMovie }) => {
  const [movies, setMovies] = React.useState([]);
  const [searchingMovies, setSearchingMovies] = React.useState([]);
  const [foundedMovies, setFoundedMovies] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);


  React.useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const storedFoundedMovies = JSON.parse(localStorage.getItem('foundedMovies')) || [];
    const storedSearchingMovies = JSON.parse(localStorage.getItem('searchingMovies')) || [];
    const storedSearchText = localStorage.getItem('searchText') || '';
    const storedIsShort = JSON.parse(localStorage.getItem('isShort')) || false;

    setMovies(storedMovies);
    setFoundedMovies(storedFoundedMovies);
    setSearchingMovies(storedSearchingMovies);
    setSearchText(storedSearchText);
    setIsShort(storedIsShort);

  }, []);

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleShortCheckboxChange = () => {
    setIsShort(!isShort);

    if (!isShort) {
      const foundedShortMovies = filterMoviesByCheckbox(foundedMovies, !isShort);
      setSearchingMovies(foundedShortMovies);
    } else {
      setSearchingMovies(foundedMovies);
    }
  };

  const handleSearch = () => {
    setIsLoading(true);
    localStorage.setItem('searchText', searchText);
    localStorage.setItem('isShort', JSON.stringify(isShort));
    getMovies()
      .then((allMovies) => {
        
        const filteredByText = filterMoviesByText(allMovies, searchText, isShort);
        setSearchingMovies(isShort ? filterMoviesByCheckbox(filteredByText) : filteredByText)
        setFoundedMovies(filteredByText);
        setMovies(allMovies);
        setIsLoading(false);
        localStorage.setItem('movies', JSON.stringify(allMovies));
        localStorage.setItem('foundedMovies', JSON.stringify(filteredByText));
        localStorage.setItem('searchingMovies', JSON.stringify(filteredByText));
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleSearchButtonClick = () => {
    if (searchText.length === 0) {
      setSearchText('введите ключевое слово');
      openInfoPopup('введите ключевое слово', false);
      setSearchingMovies([]);
      return;
    }
    handleSearch();
  };

  return (
    <main className="movies">
      {console.log(foundedMovies)}
      <SearchForm
        inputValue={searchText}
        onSearch={handleSearchButtonClick}
        onInputChange={handleSearchInputChange}
        onCheckboxChange={handleShortCheckboxChange}
        onCheckboxFlag={isShort}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={searchingMovies} handleSaveMovie={handleSaveMovie} handleDeleteMovie={handleDeleteMovie} />
      )}
      <button className="movies__button-more">Eщё</button>
    </main>
  );
};

export default Movies;
