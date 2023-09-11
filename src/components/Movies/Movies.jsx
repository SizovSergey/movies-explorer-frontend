import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getMovies from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import { filterMoviesByText, filterMoviesByCheckbox } from '../../utils/utils';

const Movies = ({ openInfoPopup, handleSaveMovie, handleDeleteMovie }) => {
  const [movies, setMovies] = useState([]);
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [visibleCards, setVisibleCards] = useState(0);

  const [isLoading , setIsLoading] = useState(false)

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const storedSearchingMovies = JSON.parse(localStorage.getItem('searchingMovies')) || [];
    const storedShortMovies = JSON.parse(localStorage.getItem('shortMovies')) || [];
    const storedSearchText = localStorage.getItem('searchText') || '';
    const storedIsShort = JSON.parse(localStorage.getItem('isShort')) || false;

    setMovies(storedMovies);
    setSearchingMovies(storedSearchingMovies);
    setShortMovies(storedShortMovies);
    setSearchText(storedSearchText);
    setIsShort(storedIsShort);
  }, []);

  const handleSomeEvent = (text,flag) => {
    openInfoPopup(text, flag);
  }

  const handleResize = () => {
    if (window.innerWidth >= 1140) {
      setVisibleCards(16);
    } else if (window.innerWidth >= 850) {
      setVisibleCards(12);
    } else if (window.innerWidth >= 756) {
      setVisibleCards(8);
    } else {
      setVisibleCards(5);
    }
  };

  const handleLoadMore = () => {
    if (window.innerWidth >= 1140) {
      setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
    }else if (window.innerWidth >= 850) {
      setVisibleCards(prevVisibleCards => prevVisibleCards + 3);
    }else if (window.innerWidth >= 756) {
      setVisibleCards(prevVisibleCards => prevVisibleCards + 2);
    } else {
      setVisibleCards(prevVisibleCards => prevVisibleCards + 5);
    }
  };

  const filterMovies = (text) => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    const filteredMovies = filterMoviesByText(storedMovies, text);
    if (filteredMovies.length === 0) {
      handleSomeEvent('Ничего не найдено', false);
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
    if (updatedShortMovies.length === 0) {
      handleSomeEvent('Ничего не найдено', false);
    }
    localStorage.setItem('shortMovies', JSON.stringify(updatedShortMovies));
    setShortMovies(updatedShortMovies);
    } else {
     return searchingMovies;
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
            setShortMovies(prevShortMovies => {
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
      handleSomeEvent('введите ключевое слово', false);
      setSearchingMovies([]);
      return;
    }
    handleResize();
    handleSearch(searchText, isShort);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="movies">
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
        <MoviesCardList movies={isShort ? shortMovies.slice(0, visibleCards) : searchingMovies.slice(0, visibleCards)} handleSaveMovie={handleSaveMovie} handleDeleteMovie={handleDeleteMovie} />
    )}
    {visibleCards < (isShort ? shortMovies : searchingMovies).length && (
      <button className="movies__button-more" onClick={handleLoadMore}>
        Ещё
      </button>
    )}
  </main>
);
};

export default Movies;