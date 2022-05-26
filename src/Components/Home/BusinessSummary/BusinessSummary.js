import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar, faHeart, faPenRuler, faEarth } from '@fortawesome/free-solid-svg-icons'

const BusinessSummary = () => {
    return (
        <div>
            <hr className='h-0 my-8 border border-solid border-t-0 border-cyan-400 w-3/5 mx-auto' />
            <div>
                <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900">Business Summary</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-1 mb-5 p-5 px-8 mx-auto items-center'>

                <div className="flex justify-center">
                    <div className="block rounded-lg shadow-lg bg-cyan-100 hover:bg-cyan-200 w-full text-center ">
                        <div className="py-3">
                            <p className=" text-cyan-700 text-center text-5xl mt-4 mb-1 font-bold secondary-title">
                                <FontAwesomeIcon className='text-green-500' icon={faSackDollar} /> 70M+
                            </p>
                        </div>
                        <p className="description text-cyan-700 font-bold text-2xl mb-4">
                            Annual Revenue
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="block rounded-lg shadow-lg bg-cyan-100 hover:bg-cyan-200 w-full text-center ">
                        <div className="py-3">
                            <p className=" text-cyan-700 text-center text-5xl mt-4 mb-1 font-bold secondary-title">
                                <FontAwesomeIcon className='text-rose-400' icon={faHeart} /> 33K+
                            </p>
                        </div>
                        <p className="description text-cyan-700 font-bold text-2xl mb-4">
                            Reviews
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="block rounded-lg shadow-lg bg-cyan-100 hover:bg-cyan-200 w-full text-center ">
                        <div className="py-3">
                            <p className=" text-cyan-700 text-center text-5xl mt-4 mb-1 font-bold secondary-title">
                                <FontAwesomeIcon className='text-blue-400' icon={faPenRuler} /> Customers
                            </p>
                        </div>
                        <p className="description text-cyan-700 font-bold text-2xl mb-4">
                            All Around The World!
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="block rounded-lg shadow-lg bg-cyan-100 hover:bg-cyan-200 w-full text-center ">
                        <div className="py-3">
                            <p className=" text-cyan-700 text-center text-5xl mt-4 mb-1 font-bold secondary-title">
                                <FontAwesomeIcon className='text-teal-700' icon={faEarth} /> 50+
                            </p>
                        </div>
                        <p className="description text-cyan-700 font-bold text-2xl mb-4">
                            Stationary Items
                        </p>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default BusinessSummary;