import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import movies from '../../utils/movies';
import { getSaveMovies } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import { filterMoviesByText, filterMoviesByCheckbox } from '../../utils/utils';

const SavedMovies = ({ isLoading, setIsLoading, openInfoPopup, savedMovies, setSavedMovies, setserchingSavedMovies, handleDeleteMovie }) => {

    const [searchText, setSearchText] = React.useState('');
    const [shortSavedMovies, setShortSavedMovies] = React.useState([]);
    const [isSavedMovieShort, seSavedMovieShort] = React.useState(false);
    const [isError, setError] = React.useState(false);

    React.useEffect(() => {
        setSavedMovies(savedMovies);
    }, []);

    const filterMovies = (text) => {
        const storedMovies = JSON.parse(localStorage.getItem('userMovies'));
        const filteredMovies = filterMoviesByText(storedMovies, text);
        if(filteredMovies.length === 0) {
          return openInfoPopup('Ничего не найдено', false);
        }
       return filteredMovies;
      };

    const handleSearch = (text, short) => {
        setIsLoading(true);
        getSaveMovies()
          .then((allMovies) => {
            setSavedMovies(allMovies);
            localStorage.setItem('userMovies', JSON.stringify(savedMovies));
      
            setSavedMovies(prevSearchingMovies => {
              const filter = filterMovies(text, short);
              if (short) {
                setShortSavedMovies(filterMoviesByCheckbox(filter, short));
                });
              }
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
    
    
      const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
      };
    
      const handleShortCheckboxChange = () => {
        setIsShort(!isSavedMovieShort);
        if (!isSavedMovieShort) {
          const updatedShortMovies = filterMoviesByCheckbox(savedMovies, !isSavedMovieShort);
          setShortSavedMovies(updatedShortMovies);
        } else {
          handleSearch(searchText, !isSavedMovieShort);
        }
      };

    const handleSearcSavedhButtonClick = () => {
        if (searchText.length === 0) {
            setSearchText('введите ключевое слово');
            openInfoPopup('введите ключевое слово', false)
            setserchingSavedMovies([]);
            return
        }
        handleSearch();
    };

    return (
        <main className='saved-movies'>
            <SearchForm
                onSavedSearch={handleSearcSavedhButtonClick} />
            {isLoading ? (
                <Preloader />) :
                (<MoviesCardList
                    movies={savedMovies}
                    handleDeleteMovie={handleDeleteMovie}
                />)
            }
        </main>
    );
}

export default SavedMovies;