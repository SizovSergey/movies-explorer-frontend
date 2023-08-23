import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Techs/Tech';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from "../Portfolio/Portfolio";


const Main = () => {
    return (
        <main className='main'>
            <Promo />
            <AboutProject />
            <Tech />
            <AboutMe />
            <Portfolio />
        </main> 
    );
}

export default Main;