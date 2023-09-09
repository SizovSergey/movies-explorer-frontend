import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

const SearchForm = ({ onSearch, inputValue, onInputChange, onCheckboxChange, onCheckboxFlag, handleSearcSavedhButtonClick, onSaveMovieTextChange, handleShortCheckboxChange }) => {

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === '/saved-movies') {
      return handleSearcSavedhButtonClick(inputValue)
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
            onChange={location.pathname === '/saved-movies' ? onSaveMovieTextChange : onInputChange} 
          />
          <button type="submit" className="search-form__button">
            Найти
          </button>
        </form>
      </div>
      <FilterCheckbox onCheckboxChange={onCheckboxChange} onCheckboxFlag={onCheckboxFlag} handleShortCheckboxChange={handleShortCheckboxChange}/>
    </div>
  );
};

export default SearchForm;
