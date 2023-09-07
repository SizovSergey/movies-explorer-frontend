import React from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie, handleSaveMovie , handleDeleteMovie }) => {

    const [IsFavorit, setIsFavorit] = React.useState(false);
    const [isVideoVisible, setVideoVisible] = React.useState(false);

    const location = useLocation();

    const handleLikeClick = () => {
        setIsFavorit(true);
        handleSaveMovie(movie);
    }

    const handleDeleteClick = () => {
        handleDeleteMovie(movie);
        setIsFavorit(false);
      };

      const toggleVideoVisible = () => {
        setVideoVisible(!isVideoVisible);
      }


    return (
        <div className='movies-card'>
             {console.log(movie)}
            <img className='movies-card__image' src={location.pathname === '/saved-movies' ? `${movie.image}` :`https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU} onClick={toggleVideoVisible} />
            <div className='movies-card__container'>
                <h3 className='movies-card__title'>
                    {movie.nameRU}
                </h3>
                { location.pathname === '/movies' &&
                <button className={!IsFavorit ? `movies-card__button-like` : 'movies-card__button-unlike'} aria-label="Поставить класс фильму" onClick={ !IsFavorit ? handleLikeClick : handleDeleteClick} />
                }
                { location.pathname === '/saved-movies' &&
                <button className='movies-card__button-delete' aria-label="Удалить фильм" onClick={handleDeleteClick} />
                }
            </div>
            <div className='movies-card__line'></div>
            <p className='movies-card__duration'>{movie.duration}</p>
        </div>
    );
}

export default MoviesCard;