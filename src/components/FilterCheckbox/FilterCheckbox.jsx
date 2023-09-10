import React from 'react';
import { useLocation } from 'react-router-dom';

const FilterCheckbox = ({ onCheckboxChange, onCheckboxFlag, handleShortCheckboxChange }) => {

  const location = useLocation();

  const handleCheckboxChange = () => {
    if (location.pathname === '/saved-movies' && handleShortCheckboxChange) {
      handleShortCheckboxChange(); 
    } else if (onCheckboxChange) {
      onCheckboxChange();  
    }
  };

  return (
    <div className='FilterCheckbox'>
      <label className="FilterCheckbox__container">
        <input
          className="FilterCheckbox__checkbox"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={onCheckboxFlag}
        />
        <span className="FilterCheckbox__slider"></span>
      </label>
      <p className='FilterCheckbox__label'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;