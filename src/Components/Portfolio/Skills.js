import React from 'react';
import icon1 from '../../images/icon-1.png'
import icon2 from '../../images/icon-2.png'
import icon3 from '../../images/icon-3.png'
import icon4 from '../../images/icon-4.png'
import icon5 from '../../images/icon-5.png'
import icon6 from '../../images/icon-6.png'
import icon7 from '../../images/icon-7.png'
import icon8 from '../../images/icon-8.png'
import icon9 from '../../images/icon-9.png'
import icon10 from '../../images/icon-10.png'
import icon11 from '../../images/icon-11.png'
import icon12 from '../../images/icon-12.png'
import icon13 from '../../images/icon-13.png'



const Skills = () => {
    return (
        <div className='p-8'>
            <h1 className="secondary-title text-5xl font-extrabold text-white text-center mb-8">Skills</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 place-items-center text-cyan-600 text-center gap-4'>
                <div>
                    <h1 className="text-4xl mb-8 text-center font-semibold secondary-title">Languages</h1>
                    <div className="box-container grid grid-cols-3 text-white description gap-10 p-2">
                        <div className="box">
                            <img className="rounded-lg w-32 mb-2" src={icon13} alt='' />
                            <h3>C++</h3>
                        </div>
                        <div className="box">
                            <img className="rounded-lg w-32 mb-2" src={icon12} alt='' />
                            <h3>Java</h3>
                        </div>
                        <div className="box">
                            <img className="rounded-lg w-32 mb-2" src={icon1} alt='' />
                            <h3>HTML</h3>
                        </div>
                        <div className="box">
                            <img className="rounded-lg w-32 mb-2" src={icon2} alt='' />
                            <h3>CSS</h3>
                        </div>
                        <div className="box">
                            <img className="rounded-lg w-32 mb-2" src={icon3} alt='' />
                            <h3>JavaScript</h3>
                        </div>
                        <div className="box">
                            <img className="rounded-lg w-32 mb-2" src={icon7} alt='' />
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl mb-8 text-center font-semibold secondary-title">Tools</h1>
                    <div className="box-container grid grid-cols-3 text-white description gap-10 p-2">
                        <div className="box">
                            <img className="rounded-lg w-32 mb-2" src={icon11} alt='' />
                            <h3>Bootstrap</h3>
                        </div>
                        <div className="box">
                            <img className="rounded-lg w-32 mb-2" src={icon5} alt='' />
                            <h3>Tailwind</h3>
                        </div>
                        <div className="box">
                            <img className="rounded-lg w-32 mb-2" src={icon10} alt='' />
                            <h3>Android Studio</h3>
                        </div>
                        <div className="box">
                            <img className="rounded-lg w-32 mb-2" src={icon9} alt='' />
                            <h3>Adobe Illustrator</h3>
                        </div>
                        <div className="box">
                            <img className="rounded-lg w-32 mb-2" src={icon4} alt='' />
                            <h3>MongoDB</h3>
                        </div>
                        <div className="box">
                            <img className="rounded-lg w-32 mb-2" src={icon6} alt='' />
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Skills;