import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import movies from '../../utils/movies';
import { getSaveMovies } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import { filterMoviesByText } from '../../utils/utils';

const SavedMovies = ({ isLoading, setIsLoading, openInfoPopup, savedMovies, setSavedMovies, setserchingSavedMovies, handleDeleteMovie }) => {

    const [searchText, setSearchText] = React.useState('');
    const [isShortSaved, setShortSaved] = React.useState(false);
    const [isError, setError] = React.useState(false);

    React.useEffect(() => {
        setSavedMovies(savedMovies);
    }, []);

    const handleSearch = () => {
        setIsLoading(true);

        localStorage.setItem('isShort', isShortSaved);
        getSaveMovies()
            .then((allMovies) => {
                const filteredByText = filterMoviesByText(allMovies, searchText, isShortSaved);
                localStorage.setItem('searchingSaveMovies', JSON.stringify(filteredByText));
                setSavedMovies(allMovies);
                setserchingSavedMovies(filteredByText);
                setIsLoading(false);
                setError(false);
            })
            .catch((err) => {
                setError(true);
                setIsLoading(false);
            });
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