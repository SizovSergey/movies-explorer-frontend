import React from 'react';
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import { useNavigate } from "react-router-dom";

const Login = ({ handleloggedIn }) => {

    const navigate = useNavigate();

    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = React.useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const validate = () => {
        const errorsList = {};

        if (!formValue.email) {
            errorsList.email = 'Введите email';
        }

        if (!formValue.password || formValue.password.length < 8) {
            errorsList.password = 'Пароль должен быть не менее 8 символов';
        }

        return errorsList;
    };

    const handleSubmit = (e) => {
        // const {  email, password } = formValue; 
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            handleloggedIn();
            navigate('/movies');
        }
    }

    return (
        <AuthTemplate
            title="Рады видеть!"
            name="login"
            buttonText="Войти"
            handleSubmit={handleSubmit}
        >
            <label className="auth-template__input-container" htmlFor="regEmail">
                <span className='auth-template__placeholder'>Email</span>
                <input
                    onChange={handleChange}
                    value={formValue.email}
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
                    value={formValue.password}
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