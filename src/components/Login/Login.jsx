import React from 'react';
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import { useFormWithValidation } from '../../hooks/usevalidation';
import { patterns } from '../../utils/utils';
import validator from 'validator';


const Login = ({ handlelogin }) => {

    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
    const isEmailValid = validator.isEmail(values.logEmail);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { logEmail, logPass } = values;
        if (isValid && isEmailValid) {
        handlelogin( logEmail, logPass);
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
            formName = 'login'
        >
            <label className="auth-template__input-container" htmlFor="logEmail">
                <span className='auth-template__placeholder'>Email</span>
                <input
                    onChange={handleChange}
                    value={values.logEmail}
                    type="email"
                    className="auth-template__input"
                    id="logEmail"
                    name="logEmail"
                    placeholder="test@mail.ru"
                    required
                />
            </label>
            <span className="auth-template__error">{errors.logEmail}</span>
            <label className="auth-template__input-container" htmlFor="logPass">
                <span className='auth-template__placeholder'>Пароль</span>
                <input
                    onChange={handleChange}
                    value={values.logPass}
                    type="password"
                    className="auth-template__input"
                    id="logPass"
                    name="logPass"
                    placeholder="12345678"
                    minLength={8}
                    maxLength={10}
                    required
                />
            </label>
            <span className="auth-template__error">{errors.logPass}</span>
        </AuthTemplate>
    );

}

export default Login;