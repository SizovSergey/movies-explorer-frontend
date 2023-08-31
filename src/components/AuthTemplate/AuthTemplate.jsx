import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from "../../images/header__logo.svg";

const AuthTemplate = ({ title, name, children, buttonText, handleSubmit }) => {
    return (
        <main className='auth-template'>
            <div className='auth-template__container'>
                <Link to="/" className="header__link">
                    <img src={headerLogo} alt="Логотип" className="logo" />
                </Link>
                <h1 className='auth-template__title'>{title}</h1>
                <form onSubmit={handleSubmit} className='auth-template__form'>
                    <div className='auth-template__form-contant'>
                    {children}
                    </div>
                    <div className='auth-template__footer'>
                        <button className="auth-template__button" type='submit'>{buttonText}</button >
                        {name === 'register' &&
                            <p className='auth-template__text'>Уже зарегистрированы? <Link to="/signin" className="auth-template__link">Войти</Link></p>
                        }
                        {name === 'login' &&
                            <p className='auth-template__text'>Ещё не зарегистрированы? <Link to="/signup" className="auth-template__link">Регистрация</Link></p>
                        }
                    </div>
                </form>
            </div>

        </main>
    );
}

export default AuthTemplate;