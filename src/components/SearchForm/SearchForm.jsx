import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

const SearchForm = ({ onSearch, inputValue, onInputChange, onCheckboxChange, onCheckboxFlag, onSavedSearch }) => {

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === '/saved-movies') {
      return onSavedSearch(inputValue)
    }   
    onSearch(inputValue);
  };

  return (
    <div className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            name="searchText"
            value={inputValue}
            onChange={onInputChange} 
          />
          <button type="submit" className="search-form__button">
            Найти
          </button>
        </form>
      </div>
      <FilterCheckbox onCheckboxChange={onCheckboxChange} onCheckboxFlag={onCheckboxFlag}/>
    </div>
  );
};

export default SearchForm;
