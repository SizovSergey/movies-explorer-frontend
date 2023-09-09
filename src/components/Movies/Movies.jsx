import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getMovies from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import { filterMoviesByText, filterMoviesByCheckbox } from '../../utils/utils';

const Movies = ({ isLoading, setIsLoading, openInfoPopup, handleSaveMovie, handleDeleteMovie, savedMovies }) => {
  const [movies, setMovies] = React.useState([]);
  const [searchingMovies, setSearchingMovies] = React.useState([]);
  const [shortMovies, setshortMovies] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);


  React.useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const storedSearchingMovies = JSON.parse(localStorage.getItem('searchingMovies')) || [];
    const storedShortMovies = JSON.parse(localStorage.getItem('shortMovies')) || [];
    const storedSearchText = localStorage.getItem('searchText') || '';
    const storedIsShort = JSON.parse(localStorage.getItem('isShort')) || false;

    setMovies(storedMovies);
    setSearchingMovies(storedSearchingMovies);
    setshortMovies(storedShortMovies);
    setSearchText(storedSearchText);
    setIsShort(storedIsShort);

    // if (searchingMovies) {
    //   setSearchingMovies(searchLikedMovie(searchingMovies, savedMovies));
    // }
  }, []);

  //   const searchLikedMovie = (movies, saveMovies) => (
  //     movies.map(movie => ({
  //         ...movie,
  //         liked: saveMovies.some(saveMovies => saveMovies.movieId === movie.id)
  //     }))
  // );

  const filterMovies = (text) => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    const filteredMovies = filterMoviesByText(storedMovies, text);
    if(filteredMovies.length === 0) {
      return openInfoPopup('Ничего не найдено', false);
    }
   return filteredMovies;
  };


  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleShortCheckboxChange = () => {
    setIsShort(!isShort);
    localStorage.setItem('isShort', !isShort);
    if (!isShort) {
      const updatedShortMovies = filterMoviesByCheckbox(searchingMovies, !isShort);
      localStorage.setItem('shortMovies', JSON.stringify(updatedShortMovies));
      setshortMovies(updatedShortMovies);
    } else {
      handleSearch(searchText, !isShort);
    }
  };
  
  const handleSearch = (text, short) => {
    setIsLoading(true);
    getMovies()
      .then((allMovies) => {
        setMovies(allMovies);
        localStorage.setItem('movies', JSON.stringify(allMovies));
  
        setSearchingMovies(prevSearchingMovies => {
          const filter = filterMovies(text, short);
          if (short) {
            setshortMovies(prevShortMovies => {
              localStorage.setItem('shortMovies', JSON.stringify(prevShortMovies));
              return filterMoviesByCheckbox(filter, short);
            });
          }
          localStorage.setItem('searchText', searchText);
          localStorage.setItem('searchingMovies', JSON.stringify(filter));
          return filter;
        });
      })
      .catch((err) => {
        setIsLoading(false);
      })
      .finally(() => {
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
    handleSearch(searchText, isShort);
  };

  return (
    <main className="movies">
      {console.log(searchingMovies)}
      {console.log(shortMovies)}
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
        <MoviesCardList movies={isShort ? shortMovies : searchingMovies} handleSaveMovie={handleSaveMovie} handleDeleteMovie={handleDeleteMovie} />
      )}
      <button className="movies__button-more">Eщё</button>
    </main>
  );
};

export default Movies;
