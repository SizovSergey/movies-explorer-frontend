import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const Profile = ({ handleSignOut, handleUpdateProfile }) => {

  const currentUser = React.useContext(CurrentUserContext);
  const [showSaveBtn, setShowSaveBtn] = React.useState(false);
  const [isInputChanged, setIsInputChanged] = React.useState(false);
  const [formValue, setFormValue] = React.useState({
    name: currentUser.name,
    email: currentUser.email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });

    if (formValue.name === currentUser.name && formValue.email === currentUser.email) {
      setIsInputChanged(true);
    }
    
  }

  const handleButtonClick = () => {
    setShowSaveBtn(!showSaveBtn);
  };

  const handleSubmit = (e) => {
    const { name, email } = formValue;
    e.preventDefault();
    handleUpdateProfile(name, email);
  }

  return (
    <main className='profile'>
      {console.log(currentUser)}
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='profile__form'>
          <label className='profile__placeholder' data-placeholder="Имя">
            <input
              value={formValue.name}
              onChange={handleChange}
              type="text"
              className="profile__input"
              id="name"
              name="name"
              minLength="2"
              maxLength="40"
              placeholder="Виталий"
              disabled={!showSaveBtn}
              required
            />
          </label>
          <label className='profile__placeholder' data-placeholder="Email">
            <input value={formValue.email}
              onChange={handleChange}
              type="email"
              className="profile__input"
              id="email"
              name="email"
              placeholder="pochta@yandex.ru"
              disabled={!showSaveBtn}
              required />
          </label>
          {!showSaveBtn ?
            (<div className='profile__button-container'>
              <Link className='profile__link' onClick={handleButtonClick}>Редактировать</Link>
              <Link to="/" onClick={handleSignOut} className="profile__link profile__logout">Выйти из аккаунта</Link>
            </div>) : (
              <div className='profile__button-container'>
                <button className='profile__save-button'
                  type='submit'
                  disabled={!isInputChanged} 
                  onClick={handleSubmit}>
                  Сохранить
                </button>
              </div>)
          }
        </form>
      </div>
    </main>
  );
}

export default Profile;