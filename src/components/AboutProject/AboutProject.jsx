import React from 'react';


const AboutProject = () => {
    return (
        <section className="about-project">
            <div className='about-project__container'>
                <h2 className="about-project__title">О проекте</h2>
                <div className="about-project__info">
                    <div className="about-project__column">
                        <h3 className="about-project__column-title">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__column-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="about-project__column">
                        <h3 className="about-project__column-title">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__column-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="about-project__timeline">
                    <div className="about-project__timeline-phase">
                        <div className="about-project__timeline-green">1 неделя</div>
                        <span className="about-project__timeline-title">Back-end</span>
                    </div>
                    <div className="about-project__timeline-phase">
                        <div className="about-project__timeline-grey">4 недели</div>
                        <span className="about-project__timeline-title">Front-end</span>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default AboutProject;