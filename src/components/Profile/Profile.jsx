import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const Profile = ({ handleSignOut }) => {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [showSaveBtn, setShowSaveBtn] = React.useState(false);

  const handleButtonClick = () => {
    setShowSaveBtn(!showSaveBtn);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeDescription = (e) => {
    setEmail(e.target.value);
  }

  return (
    <main className='profile'>
      {console.log(currentUser)}
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='profile__form'>
          <label className='profile__placeholder' data-placeholder="Имя">
            <input value={name}
              onChange={handleChangeName}
              type="text"
              className="profile__input"
              id="name"
              name="name"
              minLength="2"
              maxLength="40"
              placeholder="Виталий"
              defaultValue={currentUser.name}
              disabled={!showSaveBtn}
              required
            />
          </label>
          <label className='profile__placeholder' data-placeholder="Email">
            <input value={email}
              onChange={handleChangeDescription}
              type="email"
              className="profile__input"
              id="email"
              name="email"
              placeholder="pochta@yandex.ru"
              defaultValue='ffff'
              disabled={!showSaveBtn}
              required />
          </label>
          {!showSaveBtn ?
            (<div className='profile__button-container'>
              <Link className='profile__link' onClick={handleButtonClick}>Редактировать</Link>
              <Link to="/" onClick={handleSignOut} className="profile__link profile__logout">Выйти из аккаунта</Link>
            </div>) : (
              <div className='profile__button-container'>
                <button className='profile__save-button' onClick={handleButtonClick}>Сохранить</button>
              </div>)
          }
        </form>
      </div>
    </main>
  );
}

export default Profile;