import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from "../../images/header__logo.svg";

const AuthTemplate = ({ title, name, children, buttonText, handleSubmit }) => {
    return (
        <div className='authTemplate'>
            <div className='authTemplate__container'>
                <Link to="/" className="header__link">
                    <img src={headerLogo} alt="Логотип" className="logo" />
                </Link>
                <h2 className='authTemplate__title'>{title}</h2>
                <form onSubmit={handleSubmit} className='authTemplate__form'>
                    {children}
                
                </form>
                </div>
                <div className='authTemplate__footer'>
                        <button className="authTemplate__button">{buttonText}</button >
                        {name === 'register' &&
                            <p className='authTemplate__text'>Уже зарегистрированы? <Link to="/signin" className="authTemplate__link">Войти</Link></p>
                        }
                        {name === 'login' &&
                            <p className='authTemplate__text'>Ещё не зарегистрированы? <Link to="/signup" className="authTemplate__link">Регистрация</Link></p>
                        }
                    </div>
            
        </div>
    );
}

export default AuthTemplate;