import React from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie }) => {

    const [IsFavorit, setIsFavorit] = React.useState(false);

    const location = useLocation();

    const handleLikeClick = () => {
        setIsFavorit(!IsFavorit);
    }

    const handleDeleteClick = () => {
        const elementToRemove = document.getElementById(movie.id); 
        if (elementToRemove) {
          elementToRemove.remove();
        }
      };


    return (
        <div className='movies-card'>
            <img className='movies-card__image' src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU} />
            <div className='movies-card__container'>
                <h3 className='movies-card__title'>
                    {movie.nameRU}
                </h3>
                { location.pathname === '/movies' &&
                <button className={!IsFavorit ? `movies-card__button-like` : 'movies-card__button-unlike'} aria-label="Поставить класс фильму" onClick={handleLikeClick} />
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