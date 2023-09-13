import React from 'react';
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import { useFormWithValidation } from '../../hooks/usevalidation';
import { emailPattern, namePattern } from '../../utils/constans';


const Register = ({ handleRegister }) => {

    const { values, handleChange, errors, isValid } = useFormWithValidation();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const { RegUserName, RegEmail, RegPassword } = values;
        if (isValid) {
          handleRegister(RegUserName, RegEmail, RegPassword);
        }
      };

    return (
        <AuthTemplate
            title="Добро пожаловать!"
            name="register"
            buttonText="Зарегистрироваться"
            handleSubmit={handleSubmit}
            isValid={isValid}
            formName ='registr'
        >
            <label className="auth-template__input-container" htmlFor="RegUserName">
                <span className='auth-template__placeholder'>Имя</span>
                <input
                    onChange={handleChange}
                    value={values.RegUserName || ''}
                    type="text"
                    className="auth-template__input"
                    id="RegUserName"
                    name="RegUserName"
                    placeholder="Ваше имя..."
                    pattern={namePattern}
                    minLength={2}
                    maxLength={16}
                    required
                />
            </label>
            <span className="auth-template__error">{errors.RegUserName}</span>
            <label className="auth-template__input-container" htmlFor="RegEmail">
                <span className='auth-template__placeholder'>Email</span>
                <input
                    onChange={handleChange}
                    value={values.RegEmail || ''}
                    type="email"
                    className="auth-template__input"
                    id="RegEmail"
                    name="RegEmail"
                    placeholder="test@email.ru"
                    pattern={emailPattern}
                    required
                />
            </label>
            <span className="auth-template__error">{errors.RegEmail}</span>
            <label className="auth-template__input-container" htmlFor="RegPassword">
                <span className='auth-template__placeholder'>Пароль</span>
                <input
                    onChange={handleChange}
                    value={values.RegPassword || ''}
                    type="password"
                    className="auth-template__input"
                    id="RegPassword"
                    name="RegPassword"
                    placeholder="12345678"
                    maxLength={10}
                    minLength={8}
                    required
                />
            </label>
            <span className="auth-template__error">{errors.RegPassword}</span>
        </AuthTemplate>
    );

}

export default Register;