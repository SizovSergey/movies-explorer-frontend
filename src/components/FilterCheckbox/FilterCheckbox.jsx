import React from 'react';

const FilterCheckbox = ({ onCheckboxChange, onCheckboxFlag }) => {
  

  const handleCheckboxChange = () => {
    onCheckboxChange(); // Вызываем колбэк с новым значением
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