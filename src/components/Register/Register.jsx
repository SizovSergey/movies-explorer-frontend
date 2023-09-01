import React from 'react';
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import { useNavigate } from "react-router-dom";


const Register = ({handleloggedIn}) => {

    const navigate = useNavigate();

    const [formValue, setFormValue] = React.useState ({
        userName: '',
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
        const errorsList= {};

        if (!formValue.userName) {
            errorsList.userName = 'Введите имя';
        }

        if (!formValue.email) {
            errorsList.email = 'Введите email';
        }

        if (!formValue.password || formValue.password.length < 8) {
            errorsList.password = 'Пароль должен быть не менее 8 символов';
        }

        return errorsList;
    };

    const handleSubmit = (e) => {
        // const { userName, email, password } = formValue; 
        e.preventDefault();
        const newErrors = validate();
        console.log('ошибки:', newErrors);
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            handleloggedIn();
            navigate('/movies');
        }
    }

    return (
        <AuthTemplate
            title="Добро пожаловать!"
            name="register"
            buttonText="Зарегистрироваться"
            handleSubmit={handleSubmit}
        >
            <label className="auth-template__input-container" htmlFor="userName">
                <span className='auth-template__placeholder'>Имя</span>
                <input
                    onChange={handleChange}
                    value={formValue.userName}
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
                    value={formValue.email}
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

export default Register;