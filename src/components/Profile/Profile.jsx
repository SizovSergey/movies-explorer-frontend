import React from 'react';

const Profile = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeDescription = (e) => {
    setEmail(e.target.value);
  }

  return (
    <section className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, Name!</h2>
        <label className="profile__input-container" htmlFor="name">
          <label className='profile__placeholder'>Имя
            <input value={name} onChange={handleChangeName} type="text" className="profile__input" id="name" name="name" minLength="2" maxLength="40"
              required />
          </label>
          <span id="name-error"></span>
        </label>
        <div className='profile__line'></div>
        <label className="profile__input-container" htmlFor="email">
          <label className='profile__placeholder'>Email
            <input value={email} onChange={handleChangeDescription} type="email" className="profile__input" id="email" name="email"
              required />
          </label>
          <span id="email-error"></span>
        </label>
        <div className='profile__button-container'>
          <button className='profile__button-edit'>Редактировать</button>
          <button className='profile__button-edit'>Выйти из аккаунта</button>
        </div>
      </div>
    </section>
  );
}

export default Profile;