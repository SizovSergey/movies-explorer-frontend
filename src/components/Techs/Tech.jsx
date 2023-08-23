import React from 'react';


const Tech = () => {
    return (
        <section className="tech">
            <div className="techs__container">
                <h2 className="techs__title">Технологии</h2>
                <h3 className="techs__technology">7 технологий</h3>
                <p className="techs__cours">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__list">
                    <li className="techs__list-element">HTML</li>
                    <li className="techs__list-element">CSS</li>
                    <li className="techs__list-element">JS</li>
                    <li className="techs__list-element">React</li>
                    <li className="techs__list-element">Git</li>
                    <li className="techs__list-element">Express.js</li>
                    <li className="techs__list-element">mongoDB</li>
                </ul>
            </div>
        </section>

    );
}

export default Tech;