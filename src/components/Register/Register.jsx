import React from 'react';
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import { useFormWithValidation } from '../../hooks/usevalidation';


const Register = ({ handleRegister }) => {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { userName, email, password } = values;
      if (isValid) {
        handleRegister(userName, email, password);
        resetForm()
      }
    }

    return (
        <AuthTemplate
            title="Добро пожаловать!"
            name="register"
            buttonText="Зарегистрироваться"
            handleSubmit={handleSubmit}
            isValid={!isValid}
        >
            <label className="auth-template__input-container" htmlFor="userName">
                <span className='auth-template__placeholder'>Имя</span>
                <input
                    onChange={handleChange}
                    value={values.userName || ''}
                    type="text"
                    className="auth-template__input"
                    id="userName"
                    name="userName"
                    placeholder="Ваше имя..."
                />
            </label>
            <span className="auth-template__error">{errors.userName}</span>
            <label className="auth-template__input-container" htmlFor="email">
                <span className='auth-template__placeholder'>Email</span>
                <input
                    onChange={handleChange}
                    value={values.email || ''}
                    type="email"
                    className="auth-template__input"
                    id="email"
                    name="email"
                    placeholder="test@email.ru"
                />
            </label>
            <span className="auth-template__error">{errors.email}</span>
            <label className="auth-template__input-container" htmlFor="password">
                <span className='auth-template__placeholder'>Пароль</span>
                <input
                    onChange={handleChange}
                    value={values.password || ''}
                    type="password"
                    className="auth-template__input"
                    id="password"
                    name="password"
                    placeholder="12345678"
                />
            </label>
            <span className="auth-template__error">{errors.password}</span>
        </AuthTemplate>
    );

}

export default Register;