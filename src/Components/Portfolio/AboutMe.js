import React from 'react';

const AboutMe = () => {
    return (
        <div className='p-8'>
            <h1 className="secondary-title text-5xl font-extrabold text-white text-center">About <span className='text-cyan-600'>Me</span></h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 place-items-center p-8 gap-4 mx-auto'>
                <div>
                    <img className='p-1 bg-white border rounded mx-auto' src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="Myself" />
                </div>
                <div className='text-white'>
                    <h1 className="text-4xl mb-4 text-center font-semibold secondary-title">Personal <span className='text-cyan-600'>Information</span></h1>
                    <div className='description'>
                        <h3 className="text-2xl"><span className="font-semibold text-cyan-600">Name : </span>Toufiq Islam Swoad<br />
                            <span className="font-semibold text-cyan-600">Date of Birth : </span> 11-10-1998<br />
                            <span className="font-semibold text-cyan-600">Nationality : </span> Bangladeshi<br />
                            <span className="font-semibold text-cyan-600">Religion : </span> Islam<br />
                            <span className="font-semibold text-cyan-600">Blood Group : </span> B+<br />
                            <span className="font-semibold text-cyan-600">Language : </span> Bengali, English</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;