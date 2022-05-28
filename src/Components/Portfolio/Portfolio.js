import React from 'react';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Skills from './Skills';

const Portfolio = () => {
    return (
        <div className="bg-slate-900">
            <Intro></Intro>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Portfolio;