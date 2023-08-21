import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import headerLogo from '../../images/header__logo.svg';

const Header = ({ loggedIn }) => {

    const currentPath = window.location.pathname;

    return (
        <header className={currentPath === '/main' ? 'header header__main-theme' : 'header'}>
            <Link to="/" className="header__link">
                <img src={headerLogo} alt="Логотип" className="header__logo" />
            </Link>
            <Navigation loggedIn={loggedIn} />
            {loggedIn ? (
                <Link to='/profile' className='header__button_profile'>
                    
                </Link>
            ) : (
                <div className='header__container_auth'>
                    <Link to='/signup' className='header__link'>Регистрация</Link>
                    <Link to='/signin'>
                        <button className='header__button_logout'>
                            Войти
                        </button>
                    </Link>
                </div>
            )}
        </header>
    );
}

export default Header;