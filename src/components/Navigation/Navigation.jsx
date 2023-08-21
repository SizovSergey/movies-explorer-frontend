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
        </>
      ) : 
      <>
      </>}
    </nav>
  )
};

export default Navigation;
