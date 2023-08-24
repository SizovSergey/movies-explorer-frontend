import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
    return (
        <div className='search-form'>
            <div className='search-form__container'>
                <input className='search-form__input' type="text" placeholder='Фильм'></input>
                <button type="button" className='search-form__button'>Поиск</button>
            </div>
            < FilterCheckbox />
        </div>
    );
}

export default SearchForm;