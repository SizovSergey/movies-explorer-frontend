import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/header__logo.svg';

const Header = () => {

    return (
        <header className="header">
          <img src={headerLogo} alt="Логотип" className="header__logo" />
            <div className="header__container">
            <p className='header__link'>Регистрация</p>
           <button className="header__buton" type="button" aria-label="Войти">Войти</button>
            </div>
        </header>
    );
}

export default Header;