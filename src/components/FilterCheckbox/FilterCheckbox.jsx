import React from 'react';

const FilterCheckbox = () => {
    return (
        <div className='FilterCheckbox'>
            <label className="FilterCheckbox__container">
                <input className="FilterCheckbox__checkbox" 
                type="checkbox"
                id='FilterCheckbox' />
                <span className="FilterCheckbox__slider"></span>
            </label>
            <label className='FilterCheckbox__label' htmlFor='FilterCheckbox'>Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;