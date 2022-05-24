import React from 'react';
import logo from '../../images/superbrand.png'


const About = () => {
    return (
        <div>
            <div className='p-5 mx-auto mb-8 mt-8'>
                <h3 className='secondary-title text-center text-4xl font-semibold text-cyan-900'>
                    About Us
                </h3>
                <div className='grid grid-cols-1 gap-5'>
                    <div className='p-8'>
                        <img className='mx-auto' src={logo} alt="" />
                    </div>
                    <div className='description text-center px-16'>
                        <p>
                            Established in 2016. We are proud to say that we are one of the largest pencil maker in ASIA having a capacity of making 3 million pencils per day. Apart from pencils, we make all kinds of stationary items. <br />

                            <span className='title'>কাঠ-পেন্সিল</span> has created an uncontested marketplace in Bangladesh through value innovation. We have redefined the core value of stationary items and still developing trendy products innovating various augmented values. Innovative product development has enabled us to serve some MNCs as well as some reputed local and international buyers. We are already exporting our pens to Middle East, Africa and some parts of Asia and Europe. <br />

                            <span className='title'>কাঠ-পেন্সিল</span>, having established itself to a meaningful height in terms of business value and contribution to consumer life throughout the years has achieved the status of Superbrand in Bangladesh. We are grateful to millions of our consumers for their love and passion for the brand.
                        </p>
                    </div>
                    <hr className='h-0 my-6 border border-solid border-t-0 border-cyan-400 w-3/5 mx-auto' />
                    <div>
                        <h3 className='secondary-title text-center text-3xl font-semibold text-cyan-900'>
                            BOARD OF DIRECTORS
                        </h3>
                        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid gap-5 p-3 mt-3'>
                            <div className="flex justify-center">
                                <div className="rounded-lg shadow-lg bg-white max-w-sm border-solid border-b-4 border-cyan-500">
                                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <img className="rounded-t-lg" src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg" alt="" />
                                    </a>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Drew Jordan</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="rounded-lg shadow-lg bg-white max-w-sm border-solid border-b-4 border-cyan-500">
                                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <img className="rounded-t-lg" src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg" alt="" />
                                    </a>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Jack Crockett</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="rounded-lg shadow-lg bg-white max-w-sm border-solid border-b-4 border-cyan-500">
                                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <img className="rounded-t-lg" src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
                                    </a>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Robin Blake</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;