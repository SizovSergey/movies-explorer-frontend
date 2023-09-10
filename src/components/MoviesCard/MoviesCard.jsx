import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const MoviesCard = ({ movie, handleSaveMovie, handleDeleteMovie }) => {

    const [IsFavorit, setIsFavorit] = React.useState(
        localStorage.getItem(`IsFavorit_${movie.id}`) === "true");


    const location = useLocation();

    const handleLikeClick = () => {
        setIsFavorit(true);
        localStorage.setItem(`IsFavorit_${movie.id}`, "true");
        handleSaveMovie(movie);
    }

    const handleDeleteClick = () => {
        console.log(movie)
        handleDeleteMovie(movie);
        localStorage.setItem(`IsFavorit_${movie.id}`, "false");
        setIsFavorit(false);
    };

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