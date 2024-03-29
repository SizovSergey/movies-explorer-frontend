import React from 'react';
import photo from '../../images/random_devops.png'

const AboutMe = () => {

    return (
        <section className="about-me">
            <div className='about-me__container'>
            <h1 className='about-me__title'>Студент</h1>
            <div className='about-me__student-info'>
                <div className='about-me__text'>
                    <h2 className='about-me__student'>Сергей</h2>
                    <p className='about-me__info'>Недоразработчик, недавно 39 стукнуло</p>
                    <p className='about-me__about'>
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
                        После того, как прошёл курс по веб&#8209;разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a className='about-me__link' href='https://github.com/SizovSergey' target='_blank' rel='noreferrer'>Github</a>
                </div>
                <img
                    className='about-me__photo'
                    src={photo}
                    alt='Мое фото'
                />
            </div>
            </div>
        </section>

    );
}

export default AboutMe;