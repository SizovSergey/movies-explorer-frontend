import React from 'react';

const FilterCheckbox = ({ onCheckboxChange }) => {
  const handleCheckboxChange = () => {
    onCheckboxChange();
  };

  return (
    <div className='FilterCheckbox'>
      <label className="FilterCheckbox__container">
        <input
          className="FilterCheckbox__checkbox"
          type="checkbox"
          onChange={handleCheckboxChange}
        />
        <span className="FilterCheckbox__slider"></span>
      </label>
      <p className='FilterCheckbox__label'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;