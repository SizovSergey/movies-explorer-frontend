import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import headerLogo from '../../images/header__logo.svg';

const Header = ({ loggedIn }) => {

    return (
        <header className="header">
            <Link to="/" className="header__link">
                <img src={headerLogo} alt="Логотип" className="header__logo" />
            </Link>
            <Navigation loggedIn = {loggedIn} />
        </header>
    );
}

export default Header;