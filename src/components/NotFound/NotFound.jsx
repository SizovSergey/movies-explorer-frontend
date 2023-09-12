import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-3);
    }

    return (
        <main className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Страница не найдена</p>
            <a className="not-found__link" onClick={goBack}>Назад</a>
        </main>
    );
}

export default NotFound;