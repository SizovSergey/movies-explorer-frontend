import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Profile = ({ isLogin }) => {

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
    <section className='profile'>
      <Header isLogin={isLogin} />
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form className='profile__form'>
          <label className='profile__placeholder'>Имя
            <input value={name} onChange={handleChangeName} type="text" className="profile__input" id="name" name="name" minLength="2" maxLength="40"
              required />
          </label>
          <div className='profile__line'></div>
          <label className='profile__placeholder'>Email
            <input value={email} onChange={handleChangeDescription} type="email" className="profile__input" id="email" name="email"
              required />
          </label>
        </form>

        {!showSaveBtn ?
          (<div className='profile__button-container'>
            <a className='profile__link' onClick={handleButtonClick}>Редактировать</a>
            <Link to="/" className="profile__link profile__logout">Выйти из аккаунта</Link>
          </div>) : (<button className='profile__save-button' onClick={handleButtonClick}>Сохранить</button>)
        }
      </div>
    </section>
  );
}

export default Profile;