import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { getSaveMovies } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import { filterMoviesByText, filterMoviesByCheckbox } from '../../utils/utils';

const SavedMovies = ({ isLoading,setIsLoading,openInfoPopup, savedMovies, setSavedMovies, handleDeleteMovie }) => {

    const [searchTextSavedMovie, setSearchTextSavedMovie] = React.useState('');
    const [shortSavedMovies, setShortSavedMovies] = React.useState([]);
    const [isSavedMovieShort, setSavedMovieShort] = React.useState(false);

    React.useEffect(() => {
        const jwt = localStorage.getItem('token');
            getSaveMovies(jwt)
            .then((savedMovies) => {
              setSavedMovies(savedMovies);
              localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
            })
            .catch((err) => {
              console.log(err.message);
            });
      }, [])

      const handleSomeEvent = (text,flag) => {
        openInfoPopup(text, flag);
      }

      const handleSearchSavedPage = (text, short) => {
        setIsLoading(true);
        const filter = filterMoviesByText(savedMovies, text);
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

    const handleSearcSavedhButtonClick = () => {  
        if (setSearchTextSavedMovie.length === 0) {
            setSearchTextSavedMovie('введите ключевое слово');
            handleSomeEvent('введите ключевое слово', false)
            return
        }
        handleSearchSavedPage(searchTextSavedMovie, isSavedMovieShort);
    };

    return (
        <main className='saved-movies'>
            <SearchForm
                handleSearcSavedhButtonClick={handleSearcSavedhButtonClick}
                onSaveMovieTextChange={handleSearchInputChangeSavedPage}
                handleShortCheckboxChange={handleShortCheckboxChange} />
            {isLoading ? 
            (<Preloader />) :
                (<MoviesCardList
                    movies={isSavedMovieShort ? shortSavedMovies : savedMovies}
                    handleDeleteMovie={handleDeleteMovie}
                />)
            }
        </main>
    );
}

export default SavedMovies;