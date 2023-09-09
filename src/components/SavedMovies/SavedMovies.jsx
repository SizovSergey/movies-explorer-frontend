import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import movies from '../../utils/movies';
import { getSaveMovies } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import { filterMoviesByText, filterMoviesByCheckbox } from '../../utils/utils';

const SavedMovies = ({ isLoading, setIsLoading, openInfoPopup, savedMovies, setSavedMovies, setserchingSavedMovies, handleDeleteMovie }) => {

    const [searchTextSavedMovie, setSearchTextSavedMovie] = React.useState('');
    const [shortSavedMovies, setShortSavedMovies] = React.useState([]);
    const [isSavedMovieShort, setSavedMovieShort] = React.useState(false);

    React.useEffect(() => {
        setSavedMovies(savedMovies);
    }, []);


    const handleSearchSavedPage = (text, short) => {
        setIsLoading(true);
              const filter = filterMoviesByText(savedMovies,text);
              setSavedMovies(filter);
              if (short) {
                setShortSavedMovies(filterMoviesByCheckbox(filter, short));
              }
              setIsLoading(false);
      };
    
    
      const handleSearchInputChangeSavedPage = (e) => {
        setSearchTextSavedMovie(e.target.value);
      };
    
      const handleShortCheckboxChange = () => {
        setSavedMovieShort(!isSavedMovieShort);
        if (!isSavedMovieShort) {
          const updatedShortMovies = filterMoviesByCheckbox(savedMovies, !isSavedMovieShort);
          setShortSavedMovies(updatedShortMovies);
        } else {
            handleSearchSavedPage(searchTextSavedMovie, !isSavedMovieShort);
        }
      };

    const handleSearcSavedhButtonClick = (text) => {
        if (setSearchTextSavedMovie.length === 0) {
            setSearchTextSavedMovie('введите ключевое слово');
            setserchingSavedMovies([]);
            return
        }
        handleSearchSavedPage(searchTextSavedMovie, isSavedMovieShort);
    };

    return (
        <main className='saved-movies'>
            <SearchForm
                handleSearcSavedhButtonClick={handleSearcSavedhButtonClick} onSaveMovieTextChange={handleSearchInputChangeSavedPage} />
            {isLoading ? (
                <Preloader />) :
                (<MoviesCardList
                    movies={isSavedMovieShort ? shortSavedMovies :savedMovies}
                    handleDeleteMovie={handleDeleteMovie}
                />)
            }
        </main>
    );
}

export default SavedMovies;