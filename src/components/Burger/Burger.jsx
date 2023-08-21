import React from 'react';
import { Link } from 'react-router-dom';

const Burger = ({onClose}) => {

    return (
        <div className='burger'>
            <div className='burger__container'>
                <button type='button' className='burger__close-btn' onClick={() => onClose()} />
                <ul className='burger__menu'>
                    <li>Главная</li>
                    <li>Фильмы</li>
                    <li>Сохранённые фильмы</li>
                </ul>
                <Link to='/profile'>
                <button className='burger__button_profile'>
                        Аккаунт
                        <div className='burger__button_profile-container'>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.42985 7.96781C8.79169 7.40572 9.7501 6.06478 9.7501 4.5C9.7501 2.42893 8.07117 0.75 6.0001 0.75C3.92903 0.75 2.2501 2.42893 2.2501 4.5C2.2501 6.06473 3.20845 7.40563 4.57021 7.96775C3.17555 8.19993 1.89263 8.76594 0.80835 9.58058L2.1899 11.4194C3.25119 10.6221 4.56874 10.15 5.99986 10.15C7.43098 10.15 8.74852 10.6221 9.80981 11.4194L11.1914 9.58058C10.1072 8.76601 8.82438 8.20003 7.42985 7.96781Z" fill="black" />
                            </svg>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Burger;