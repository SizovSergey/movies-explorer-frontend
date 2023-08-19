import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ loggedIn }) => {

    const currentPath = window.location.pathname;

  return (
    <nav className='navigation'>
      {loggedIn ? (
        <>
          <div className='navigation__movies'>
            <Link to='/movies' className={currentPath === '/movies' ? 'navigation__movies-link_active' : 'navigation__movies-link'}>
              Фильмы
            </Link>
            <Link to='/saved-movies' className={currentPath === '/saved-movies' ? 'navigation__movies-link_active' : 'navigation__movies-link'}>
              Сохранённые фильмы
            </Link>
          </div>
          <Link to='/profile'>
              <button className='navigation__button_account'>
                Аккаунт
              </button>
            </Link>
        </>
      ) : (
        <div className='navigation__auth'>
          <Link to='/signup' className='navigation__link'>Регистрация</Link>
          <Link to='/signin'>
            <button className='navigation__button'>
              Войти
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
};

export default Navigation;
