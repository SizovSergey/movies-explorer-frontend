import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const MoviesCard = ({ movie, handleSaveMovie, handleDeleteMovie }) => {

    const [IsFavorit, setIsFavorit] = React.useState(false);


    const location = useLocation();

    const handleLikeClick = async () => {
        try {
          await handleSaveMovie(movie);
          setIsFavorit(true);
        } catch (error) {
          console.error('Произошла ошибка при сохранении фильма:', error);
        }
      }

    const handleDeleteClick = async () => {
        try {
          await handleDeleteMovie(movie);
          setIsFavorit(false);
        } catch (error) {
          console.error('Произошла ошибка при удаление фильма:', error);
        }
      }

    const handleDeleteSaveMovieClick = () => {
        handleDeleteMovie(movie);
        setIsFavorit(true);
    };

    const convertDurationToHoursAndMinutes = (duration) => {
        const hours = Math.floor(duration / 60);
        const remainingMinutes = duration % 60;
        if (hours > 0) {
            return `${hours}ч${remainingMinutes}м`;
        } else {
            return `${remainingMinutes}м`;
        }
    }

    React.useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        if (savedMovies) {
          const isMovieSaved = savedMovies.some((savedMovie) => (
            savedMovie.movieId === movie.id || savedMovie._id === movie._id
          ));
          setIsFavorit(isMovieSaved);
        }
      }, []);

    return (
        <div className='movies-card'>
            <Link to={movie.trailerLink} target='_blank' rel='noreferrer'>
                <img className='movies-card__image' src={location.pathname === '/saved-movies' ? `${movie.image}` : `https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU}  />
            </Link>
            <div className='movies-card__container'>
                <h3 className='movies-card__title'>
                    {movie.nameRU}
                </h3>
                {location.pathname === '/movies' &&
                    <button className={!IsFavorit ? `movies-card__button-like` : 'movies-card__button-unlike'} aria-label="Поставить класс фильму" onClick={!IsFavorit ? handleLikeClick : handleDeleteClick} />
                }
                {location.pathname === '/saved-movies' &&
                    <button className='movies-card__button-delete' aria-label="Удалить фильм" onClick={handleDeleteSaveMovieClick} />
                }
            </div>
            <div className='movies-card__line'></div>
            <p className='movies-card__duration'>{convertDurationToHoursAndMinutes(movie.duration)}</p>
        </div>
    );
}

export default MoviesCard;