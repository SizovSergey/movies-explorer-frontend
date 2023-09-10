import React from 'react';
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import {useFormWithValidation} from '../../hooks/usevalidation'


const Login = ({ handlelogin }) => {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = values;
        if (isValid) {
        handlelogin( email, password);
          resetForm();
        }
      };

    return (
        <AuthTemplate
            title="Рады видеть!"
            name="login"
            buttonText="Войти"
            handleSubmit={handleSubmit}
            isValid={isValid}
        >
            <label className="auth-template__input-container" htmlFor="regEmail">
                <span className='auth-template__placeholder'>Email</span>
                <input
                    onChange={handleChange}
                    value={values.email}
                    type="email"
                    className="auth-template__input"
                    id="email"
                    name="email"
                    placeholder="test@mail.ru"
                />
            </label>
            <span className="auth-template__error">{errors.email}</span>
            <label className="auth-template__input-container" htmlFor="regPass">
                <span className='auth-template__placeholder'>Пароль</span>
                <input
                    onChange={handleChange}
                    value={values.password}
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

export default Login;