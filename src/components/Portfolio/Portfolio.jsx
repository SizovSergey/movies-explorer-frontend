import React from 'react';

const Portfolio = () => {

    return (
        <section className="portfolio">
            <div className='portfolio__container'>
                <h2 className='portfolio__title'>Портфолио</h2>
                <ul className="portfolio__list">
                    <li className="portfolio__list-element">
                        <a className='portfolio__link' href='https://github.com/SizovSergey/how-to-learn' target='_blank' rel='noreferrer'>Статичный сайт</a><
                        /li>
                    <li className="portfolio__list-element">
                        <a className='portfolio__link' href='https://github.com/SizovSergey/russian-travel' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
                    </li>
                    <li className="portfolio__list-element">
                        <a className='portfolio__link' href='https://github.com/SizovSergey/react-mesto-api-full-gha' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
                    </li>
                </ul>
            </div>
        </section>

    );
}

export default Portfolio;