import React from 'react';

const Profile = () => {

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
        <div className='profile__button-container'>
          {!showSaveBtn ?
              (<>
                  <a className='profile__link' onClick={handleButtonClick}>Редактировать</a>
                  <a className='profile__link profile__logout'>Выйти из аккаунта</a>
              </>) : (<button className='profile__save-button' onClick={handleButtonClick}>Сохранить</button>)
          }
        </div>
      </div>
    </section>
  );
}

export default Profile;