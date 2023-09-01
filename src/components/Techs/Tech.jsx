import React from 'react';


const Tech = () => {
    return (
        <section className="tech">
            <div className="main__techs-container">
                <h2 className="main__techs-title">Технологии</h2>
                <h3 className="main__techs-technology">7 технологий</h3>
                <p className="main__techs-cours">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="main__techs-list">
                    <li className="main__techs-list-element">HTML</li>
                    <li className="main__techs-list-element">CSS</li>
                    <li className="main__techs-list-element">JS</li>
                    <li className="main__techs-list-element">React</li>
                    <li className="main__techs-list-element">Git</li>
                    <li className="main__techs-list-element">Express.js</li>
                    <li className="main__techs-list-element">mongoDB</li>
                </ul>
            </div>
        </section>

    );
}

export default Tech;