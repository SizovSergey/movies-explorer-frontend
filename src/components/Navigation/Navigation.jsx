import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ loggedIn }) => {

  const location = useLocation();

  return (
    <nav className='navigation'>
      {loggedIn ? (
        <>
          <div className='navigation__movies'>
            <Link to='/movies' className={location.pathname === '/movies' ? 'navigation__movies-link_active'
              :
              location.pathname === '/main' ?
                `navigation__movies-link navigation__movies-link_white`
                :
                'navigation__movies-link'
            }
            >
              Фильмы
            </Link>
            <Link to='/saved-movies' className={location.pathname === '/saved-movies' ? 'navigation__movies-link_active'
              :
              location.pathname === '/main' ?
                `navigation__movies-link navigation__movies-link_white`
                :
                'navigation__movies-link'
            }
            >
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
