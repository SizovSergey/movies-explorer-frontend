import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({onSearch, movies}) => {


    const [formValue, setFormValue] = React.useState('')

      const handleChange = (e) => {
        const {name, value} = e.target;
    
        setFormValue({
          ...formValue,
          [name]: value
        });
      }

      const handleSubmit = (e) => {
        e.preventDefault(); 
        localStorage.setItem('serchingText', JSON.stringify(formValue));
        onSearch(formValue);
    }

    return (
        <div className='search-form'>
            <div className='search-form__container'>
                <form className='search-form__form' onSubmit={handleSubmit}>
                <input className='search-form__input' type="text" placeholder='Фильм' name='searchText' onChange={handleChange}></input>
                <button type='submit' className='search-form__button'>Найти</button>
                </form>
            </div>
            < FilterCheckbox />
        </div>
    );
}

export default SearchForm;