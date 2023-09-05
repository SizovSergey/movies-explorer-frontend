import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getMovies from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import { filterMoviesByText } from '../../utils/utils';

const Movies = () => {
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setError] = React.useState(false)

  React.useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    const storedfilteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
    const storedSearchText = localStorage.getItem('searchText') || '';
    const storedIsShort = localStorage.getItem('isShort') === 'true';

    setMovies(storedMovies);
    setFilteredMovies(storedfilteredMovies);
    setSearchText(storedSearchText);
    setIsShort(storedIsShort);

  }, []);

  React.useEffect(() => {
    localStorage.setItem('isShort', isShort);
    localStorage.setItem('searchText', searchText);
  }, [searchText, isShort]);

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

        const filteredByText = filterMoviesByText(allMovies, searchText, isShort);
        localStorage.setItem('movies', JSON.stringify(allMovies));
        localStorage.setItem('filteredMovies', JSON.stringify(filteredByText));

        setMovies(allMovies);
        setFilteredMovies(filteredByText);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  };

  const handleSearchButtonClick = () => {
    if (searchText === '') {
      console.log('введите текст')
      setFilteredMovies([])

    }
    handleSearch();
  };

  return (
    <main className="movies">

      {console.log(filteredMovies)}
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
        isError ? (
          <p className='movies__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
        ) : (
          <MoviesCardList movies={filteredMovies} />
        )
      )}
      <button className="movies__button-more">Eщё</button>
    </main>
  );
};

export default Movies;
