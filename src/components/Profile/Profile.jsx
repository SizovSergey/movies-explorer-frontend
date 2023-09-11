import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/usevalidation';
import { emailPattern, namePattern } from '../../utils/utils';


const Profile = ({ handleSignOut, handleUpdateProfile }) => {

  const currentUser = React.useContext(CurrentUserContext);
  const [showSaveBtn, setShowSaveBtn] = React.useState(false);

  const { values, handleChange, resetForm, errors, isValid, setValues } = useFormWithValidation();


  const handleSubmit = (e) => {
   
      e.preventDefault();
      const { profileEmail, profileName } = values;
      handleUpdateProfile(profileName, profileEmail);

      setShowSaveBtn(false);
   
  };

  const compare = (!isValid || (currentUser.name === values.profileName && currentUser.email === values.profileEmail));

  React.useEffect(() => {
    setValues(prevValues => ({
      ...prevValues,
      profileName: currentUser.name,
      profileEmail: currentUser.email
    }));
  }, [currentUser]);


  const handleButtonClick = () => {
    setShowSaveBtn(true);
  };

  return (
    <main className='profile'>
      {console.log(currentUser)}
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='profile__form' onSubmit={handleSubmit}>
          <label className='profile__placeholder' data-placeholder="Имя">
            <input
              value={values.profileName || ''}
              onChange={handleChange}
              type="text"
              className="profile__input"
              id="profileName"
              name="profileName"
              minLength="2"
              maxLength="40"
              pattern={namePattern}
              placeholder="Имя"
              disabled={!showSaveBtn}
              required
            />
          </label>
          <span className="profile__error">{errors.profileName}</span>
          <label className='profile__placeholder' data-placeholder="Email">
            <input value={values.profileEmail || ''}
              onChange={handleChange}
              type="email"
              className="profile__input"
              id="profileEmail"
              name="profileEmail"
              pattern={emailPattern}
              placeholder="pochta@yandex.ru"
              disabled={!showSaveBtn}
              required />
          </label>
          <span className="profile__error">{errors.profileEmail}</span>
          {!showSaveBtn ?
            (<div className='profile__button-container'>
              <Link className='profile__link' onClick={handleButtonClick}>Редактировать</Link>
              <Link to="/" onClick={handleSignOut} className="profile__link profile__logout">Выйти из аккаунта</Link>
            </div>) : (
              <div className='profile__button-container'>
                <button className='profile__save-button'
                  type='submit'
                  disabled={compare}
                >
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